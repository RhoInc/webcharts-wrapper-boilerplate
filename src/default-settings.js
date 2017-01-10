const defaultSettings = {
  //Custom settings for this template
    

  //Standard webCharts settings
    
};

//Replicate settings in multiple places in the settings object.
export function syncSettings(settings) {
    //example: settings.y.column = settings.id_col;
    return settings;
}

//Default Control objects
export const controlInputs = [ 
    //example:  {type: 'subsetter', value_col: 'AESEV', label: 'Severity', multiple: true}
];

//Map values from settings to control inputs
export function syncControlInputs(controlInputs, settings) {
    //example: 
    //  var measureControl = controlInputs
    //      .filter(d => d.label && d.label === 'Measure')[0];
    //  measureControl.value_col = settings.measure_col; 
    return controlInputs
}

export default defaultSettings;
