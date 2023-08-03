const rollup = require('rollup');
const path = require('path');
const {loadConfigFile} = require('rollup/loadConfigFile');
// 加载当前脚本旁边的配置文件；
// 提供的配置对象与在命令行上传递 "--format es" 具有相同的效果，并将覆盖所有输出的格式
const isProd = process.env.NODE_ENV === 'production';


const start = () => loadConfigFile(path.resolve(__dirname, 'rollup.config.js'), {format: 'es'})
    .then(async ({options, warnings}) => {
        // “warnings”包装了 CLI 传递的默认 `onwarn` 处理程序。
        // 输出所有警告：
        // "warnings" wraps the default `onwarn` handler passed by the CLI.
        // This prints all warnings up to this point:
        console.log(`We currently have ${warnings.count} warnings`);
        // 输出所有延迟的警告：
        // This prints all deferred warnings
        warnings.flush();
        // options 是一个带有其他“output”属性的“ inputOptions”对象，该属性包含一个“ outputOptions”数组。
        // 以下将生成所有输出，并将它们以与 CLI 相同的方式写入磁盘：
        // options is an "inputOptions" object with an additional "output"
        // property that contains an array of "outputOptions".
        // The following will generate all outputs and write them to disk the same
        // way the CLI does it:
        const bundle = await rollup.rollup(options[0]);
        await Promise.all(options[0].output.map(bundle.write));

        // 你也可以将其直接传递给 "rollup.watch"
        if (!isProd) {
            rollup.watch(options[0]);
        }
    })
module.exports = start;
