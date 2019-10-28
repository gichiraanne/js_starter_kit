/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

//packages like babel need this to determine how they build for production
process.env.NODE_ENV = 'production';

//show build in progress
console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'))

webpack(webpackConfig).run((err,stats) => {
	if(err){ //if a fatal error occurred
		console.log(chalk.red(err));
		return 1;
	}
	//display some stats
	const jsonStats = stats.toJson();

	if(jsonStats.hasErrors){
		return jsonStats.errors.map(error => console.log(chalk.red(error)))
	}

	if(jsonStats.hasWarnings){
		console.log(chalk.yellow('webpack generated some warnings'));
		jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
	}

	console.log(`webpack stats: ${stats} `);

	//if we got this far, the build succeed
	console.log(chalk.green('Your app has been built for production and saved to /dist'))
	return 0;
})
