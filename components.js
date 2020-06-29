/**
 * pages模版快速生成脚本,执行命令 npm run tpl `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run comp test');
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

function ${titleCase(dirName)} (porps) {
  return (
    <View className="${dirName}-comp">
      ${dirName}
    </View>
  )
}
export default  ${titleCase(dirName)}
`;

// less文件模版
const lessTep = `
@import "~@/static/css/mixin.less";
.${dirName}-comp {

}
`;

// 导出页面模板
const exportTep = `export { default as ${titleCase(dirName)} } from './${dirName}'
// 模板自动生成占位 勿删`;

try {
  fs.mkdirSync(`./src/components/${dirName}`); // mkdir $1
} catch (e) {
  console.log(`${dirName}目录已存在，生成失败`);
  process.exit(0);
}
fs.writeFileSync(`./src/components/${dirName}/index.tsx`, indexTep);
fs.writeFileSync(`./src/components/${dirName}/index.less`, lessTep);


const exportComp = fs.readFileSync(`./src/components/index.ts`, 'utf8');

if (!exportComp.includes(`export { default as ${dirName} }`)) {
  const newExport = exportComp.replace(/\/\/ 模板自动生成占位 勿删/, exportTep);
  fs.writeFileSync('./src/components/index.ts', newExport);
}

console.log(`组件${dirName}已创建 enjoy`);

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);