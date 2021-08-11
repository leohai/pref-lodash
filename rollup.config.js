import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from 'rollup-plugin-visualizer';
import fs from 'fs-extra';
import path from 'path'
//  src 目录文件
const resolveSrc = (fileName) => {
    return path.join(__dirname, `src/${fileName}`)
}
const resolveOut = (fileName) => {
    return path.join(__dirname, `dist/${fileName}`)
}
const src = fs.readdirSync('./src')
console.log(src);
动态生成配置数组
const configArr = src.map(fileName => {
    const filePath = resolveSrc(fileName)
    const outputPath = resolveOut(fileName)
    // 分析文件
    let statsFilename = fileName.split(".")[0] + '.html'
    return  {
        input: filePath,
        plugins: [resolve(), commonjs(), json(), visualizer({
            filename: statsFilename,
            gzipSize: true
        })],
        output: {
            file: outputPath,
            format: 'es',
            // plugins: [terser()]
        },
    }
});
export default configArr
// export default [
//     {
//         input: 'index.js',
//         plugins: [resolve(), commonjs(), json()],
//         output: {
//             file: 'dist/index.js',
//             format: 'umd',
//             name: 'Index',
//             plugins: [terser()]
//         },
//     },
//     {
//         input: 'src/map.js',
//         plugins: [resolve(), commonjs(), json(), visualizer()],
//         output: {
//             file: 'dist/map.es.js',
//             format: 'es',
//             // plugins: [terser()]
//         },
//     }
// ]
