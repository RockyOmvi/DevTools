// JSON to TypeScript & Go Struct Converter
(function() {
  const jsonInput = document.getElementById('jsonInput');
  const targetLang = document.getElementById('targetLang');
  const rootNameInput = document.getElementById('rootNameInput');
  const generateBtn = document.getElementById('generateBtn');
  const sampleUserBtn = document.getElementById('sampleUserBtn');
  const sampleOrderBtn = document.getElementById('sampleOrderBtn');
  const clearBtn = document.getElementById('clearBtn');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const outputCode = document.getElementById('outputCode');
  const errorMessage = document.getElementById('errorMessage');

  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function toPascalCase(str) {
    return str
      .replace(/[-_]([a-z0-9])/gi, (_, char) => char.toUpperCase())
      .replace(/^[a-z]/, char => char.toUpperCase());
  }

  // Generate TypeScript definitions
  function generateTypeScript(jsonObj, rootName = 'RootObject') {
    const interfaces = [];
    const createdTypes = new Set();

    function parseObject(obj, name) {
      if (createdTypes.has(name)) {
        name = name + 'Alt';
      }
      createdTypes.add(name);

      let lines = [`export interface ${name} {`];

      for (const [key, value] of Object.entries(obj)) {
        const fieldName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
        const typeStr = getType(value, toPascalCase(key));
        lines.push(`  ${fieldName}: ${typeStr};`);
      }

      lines.push('}');
      interfaces.unshift(lines.join('\n'));
      return name;
    }

    function getType(val, fieldName) {
      if (val === null) return 'null | any';
      if (typeof val === 'string') return 'string';
      if (typeof val === 'number') return 'number';
      if (typeof val === 'boolean') return 'boolean';

      if (Array.isArray(val)) {
        if (val.length === 0) return 'any[]';
        const first = val[0];
        if (typeof first === 'object' && first !== null) {
          const subName = parseObject(first, fieldName + 'Item');
          return `${subName}[]`;
        }
        return `${getType(first, fieldName)}[]`;
      }

      if (typeof val === 'object') {
        const subName = parseObject(val, fieldName);
        return subName;
      }

      return 'any';
    }

    if (Array.isArray(jsonObj)) {
      if (jsonObj.length > 0 && typeof jsonObj[0] === 'object' && jsonObj[0] !== null) {
        parseObject(jsonObj[0], rootName + 'Item');
        interfaces.push(`export type ${rootName} = ${rootName}Item[];`);
      } else {
        interfaces.push(`export type ${rootName} = any[];`);
      }
    } else if (typeof jsonObj === 'object' && jsonObj !== null) {
      parseObject(jsonObj, rootName);
    } else {
      interfaces.push(`export type ${rootName} = ${typeof jsonObj};`);
    }

    return interfaces.join('\n\n');
  }

  // Generate Go structs
  function generateGo(jsonObj, rootName = 'Root') {
    const structs = [];
    const createdStructs = new Set();

    function parseObject(obj, name) {
      if (createdStructs.has(name)) {
        name = name + 'Sub';
      }
      createdStructs.add(name);

      let lines = [`type ${name} struct {`];

      for (const [key, value] of Object.entries(obj)) {
        let goFieldName = toPascalCase(key);
        // Common acronyms
        if (goFieldName.toLowerCase() === 'id') goFieldName = 'ID';
        if (goFieldName.toLowerCase() === 'url') goFieldName = 'URL';

        const typeStr = getGoType(value, toPascalCase(key));
        lines.push(`\t${goFieldName} ${typeStr} \`json:"${key}"\``);
      }

      lines.push('}');
      structs.unshift(lines.join('\n'));
      return name;
    }

    function getGoType(val, fieldName) {
      if (val === null) return 'interface{}';
      if (typeof val === 'string') return 'string';
      if (typeof val === 'boolean') return 'bool';
      if (typeof val === 'number') {
        return Number.isInteger(val) ? 'int64' : 'float64';
      }

      if (Array.isArray(val)) {
        if (val.length === 0) return '[]interface{}';
        const first = val[0];
        if (typeof first === 'object' && first !== null) {
          const subName = parseObject(first, fieldName + 'Item');
          return `[]${subName}`;
        }
        return `[]${getGoType(first, fieldName)}`;
      }

      if (typeof val === 'object') {
        const subName = parseObject(val, fieldName);
        return subName;
      }

      return 'interface{}';
    }

    if (Array.isArray(jsonObj)) {
      if (jsonObj.length > 0 && typeof jsonObj[0] === 'object' && jsonObj[0] !== null) {
        parseObject(jsonObj[0], rootName + 'Item');
        structs.push(`type ${rootName} []${rootName}Item`);
      } else {
        structs.push(`type ${rootName} []interface{}`);
      }
    } else if (typeof jsonObj === 'object' && jsonObj !== null) {
      parseObject(jsonObj, rootName);
    } else {
      structs.push(`type ${rootName} interface{}`);
    }

    return structs.join('\n\n');
  }

  function convert() {
    if (!jsonInput || !outputCode) return;
    if (errorMessage) errorMessage.style.display = 'none';

    const raw = jsonInput.value.trim();
    if (!raw) {
      if (errorMessage) {
        errorMessage.textContent = 'Please enter JSON data to convert.';
        errorMessage.style.display = 'block';
      }
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      if (errorMessage) {
        errorMessage.textContent = 'Invalid JSON: ' + err.message;
        errorMessage.style.display = 'block';
      }
      return;
    }

    const lang = targetLang ? targetLang.value : 'typescript';
    const rootName = (rootNameInput && rootNameInput.value.trim()) ? toPascalCase(rootNameInput.value.trim()) : (lang === 'go' ? 'Root' : 'RootObject');

    let result = '';
    if (lang === 'typescript') {
      result = generateTypeScript(parsed, rootName);
    } else if (lang === 'go') {
      result = generateGo(parsed, rootName);
    }

    outputCode.textContent = result;
    if (typeof showToast === 'function') showToast(`Generated ${lang === 'go' ? 'Go structs' : 'TypeScript interfaces'}`);
  }

  if (generateBtn) generateBtn.addEventListener('click', convert);
  if (targetLang) targetLang.addEventListener('change', convert);

  if (clearBtn && jsonInput && outputCode) {
    clearBtn.addEventListener('click', () => {
      jsonInput.value = '';
      outputCode.textContent = '';
      if (errorMessage) errorMessage.style.display = 'none';
    });
  }

  if (copyBtn && outputCode) {
    copyBtn.addEventListener('click', () => {
      const code = outputCode.textContent;
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => {
        if (typeof showToast === 'function') showToast('Code copied to clipboard');
      });
    });
  }

  if (downloadBtn && outputCode) {
    downloadBtn.addEventListener('click', () => {
      const code = outputCode.textContent;
      if (!code) return;
      const lang = targetLang ? targetLang.value : 'typescript';
      const ext = lang === 'go' ? '.go' : '.ts';
      const root = (rootNameInput && rootNameInput.value.trim()) ? rootNameInput.value.trim().toLowerCase() : 'types';
      const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${root}${ext}`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  // Samples
  if (sampleUserBtn && jsonInput) {
    sampleUserBtn.addEventListener('click', () => {
      jsonInput.value = JSON.stringify({
        id: 1042,
        name: "Alex Mercer",
        username: "alexm",
        email: "alex@example.com",
        isActive: true,
        roles: ["admin", "developer"],
        profile: {
          bio: "Full stack engineer and open source contributor",
          avatarUrl: "https://example.com/avatar.jpg",
          reputationScore: 98.5
        },
        metadata: {
          createdAt: "2026-01-15T08:30:00Z",
          lastLoginIp: "192.168.1.1"
        }
      }, null, 2);
      convert();
    });
  }

  if (sampleOrderBtn && jsonInput) {
    sampleOrderBtn.addEventListener('click', () => {
      jsonInput.value = JSON.stringify({
        orderId: "ORD-98214",
        totalAmount: 149.95,
        currency: "USD",
        items: [
          { sku: "DEV-KEYBOARD", quantity: 1, unitPrice: 129.95 },
          { sku: "CABLE-USB-C", quantity: 2, unitPrice: 10.00 }
        ],
        shippingAddress: {
          street: "123 Innovation Way",
          city: "San Francisco",
          state: "CA",
          postalCode: "94105",
          country: "US"
        },
        isFulfilled: false
      }, null, 2);
      convert();
    });
  }

  // Initial trigger with sample
  if (sampleUserBtn) {
    sampleUserBtn.click();
  }
})();
