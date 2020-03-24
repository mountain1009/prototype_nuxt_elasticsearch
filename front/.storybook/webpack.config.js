// const path = require('path')
// const rootPath = path.resolve(__dirname, '../app/')
//
// module.exports = async ({ config, mode }) => {
//   mode = "development"
//
//   config.module.rules.push({
//     test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
//     loader: 'url-loader',
//   });
//
//   config.module.rules.push({
//     test: /\.css/,
//     use: [
//       'style-loader',
//       { loader: 'css-loader', options: { url: false } },
//     ],
//   });
//
//   config.module.rules.push({
//     test: /\.ts/,
//     use: [
//       {
//         loader: 'ts-loader',
//         options: {
//           appendTsSuffixTo: [/\.vue$/],
//           transpileOnly: true
//         },
//       }
//     ],
//   });
//
//   config.module.rules.push({
//     test: /\.vue$/,
//     loader: 'storybook-addon-vue-info/loader',
//     enforce: 'post'
//   });
//
//   config.module.rules.push({
//     test: /\.scss$/,
//     use: [
//       'style-loader',
//       'css-loader',
//       {
//         loader: 'sass-loader',
//       },
//       {
//         loader: 'sass-resources-loader',
//         options: {
//           resources: [
//             path.resolve(__dirname, './../assets/scss/_variables.scss'),
//             path.resolve(__dirname, './../assets/scss/common.scss'),
//           ],
//         }
//       }
//     ]
//   });
//
//   config.resolve.extensions = ['.js', '.vue', '.json']
//   config.resolve.alias['~'] = rootPath
//   config.resolve.alias['@'] = rootPath
//
//   return config;
// }
