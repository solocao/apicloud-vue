'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const fs = require("fs");
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
var shell = require('shelljs')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
    //自行处理 将生成的文件复制进入widget，处理apicloud 打包问题
    var bb = ora('正在复制处理到widget文件夹...').start()
    var cppath = path.resolve(__dirname, '../vue');
    var cpPathHtml = path.resolve(__dirname, '../vue/html');
    rm(path.join(cppath, 'static'), err => {
      if (err) throw console.warn(err)
      shell.cp('-Rf', path.join(config.build.assetsRoot, '/*'), cppath);
      console.log(chalk.cyan('复制完成'))
      // fs.readdir(config.build.assetsRoot, function (err, files) {
      //   console.log(err);
      //   console.log(files);
      //   files.forEach(x => {
      //     const ext = x.split('.')[1];
      //     // html文件
      //     if (ext === 'html') {
      //       console.log('移动html模版文件');
      //       shell.cp('-Rf', path.join(config.build.assetsRoot, '/' + x), cpPathHtml);
      //     }
      //     console.log(x);

      //   });
      // });



      bb.stop()
    })
  })
})
