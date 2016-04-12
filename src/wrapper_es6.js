import { createChart, createControls, createTable } from 'webcharts';
import { controlInputs} from './default-settings'
import config from './default-settings';
import onInit from './onInit';
import onLayout from './onLayout';
import onDataTransform from './onDataTransform';
import onDraw from './onDraw';
import onResize from './onResize';
import './bin/object-assign';

export default function aeTimeline(element, settings){
	//merge user's settings with defaults
	let mergedSettings = Object.assign({}, config, settings);

	//keep settings in sync

	//add custom code to apply the data mappings in the settings object to the webcharts objects
	//example: mergedSettings.y.column = mergedSettings.id_col;
	
	
	//keep control settings in sync
	//add custom code to apply the data mappings in the settings object to the controls 
	// example: controlInputs[0].value_col = mergedSettings.sev_col;
	
	//create controls 
	// uncomment the line below if default controls are provided
	// let controls = createControls(element, {location: 'top', inputs: controlInputs});
	
	//create chart
	let chart = createChart(element, mergedSettings); //add 3rd controls object as needed 
	chart.on('init', onInit);
	chart.on('layout', onLayout);
	chart.on('datatransform', onDataTransform);
	chart.on('draw', onDraw);
	chart.on('resize', onResize);

	return chart;
}
