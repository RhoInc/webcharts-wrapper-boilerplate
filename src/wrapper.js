import './util/object-assign';
import defaultSettings from './default-settings';
import { syncSettings, controlInputs, syncControlInputs } from './default-settings'
import { createControls, createChart, createTable } from 'webcharts';
import onInit from './onInit';
import onLayout from './onLayout';
import onPreprocess from './onPreprocess';
import onDataTransform from './onDataTransform';
import onDraw from './onDraw';
import onResize from './onResize';

export default function yourFunctionNameHere(element, settings) {
  //Merge specified settings with default settings.
    let mergedSettings = Object.assign({}, defaultSettings, settings);

  //Sync properties within merged settings.
    let syncedSettings = syncSettings(mergedSettings);
    
  //Sync control inputs with merged settings.
    //let syncedControlInputs = syncControlInputs(controlInputs, mergedSettings);
    //let controls = createControls(element, {location: 'top', inputs: syncedControlInputs});

  //Define chart.
    let chart = createChart(element, syncedSettings); // Add third argument to define controls as needed.
    chart.on('init', onInit);
    chart.on('layout', onLayout);
    chart.on('preprocess', onPreprocess);
    chart.on('datatransform', onDataTransform);
    chart.on('draw', onDraw);
    chart.on('resize', onResize);

    return chart;
}
