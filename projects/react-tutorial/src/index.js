import React from 'react';
import { render } from 'react-dom';
import Sidebar from './sidebar';
import ContentArea from './content_area'
import ConfigBar from './config_bar'


function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'reduced_dataset.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

loadJSON(function(response) {
    const dataSets = JSON.parse(response)
    const config = {
        graphType: 'Line'
    }

    render(
        <div className="index">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 title dataSetsTitle">
                        Data Sets
                    </div>
                    <div className="col-md-6 title workAreaTitle">
                        Work Area
                    </div>

                    <div className="col-md-3 title chartConfigTitle">
                        Chart Config
                    </div>
                </div>
                <div className="row mainRow">
                    <div className="col-md-3">
                        <Sidebar dataSets={dataSets}/>
                    </div>
                    <div className="col-md-6">
                        <ContentArea dataSets={dataSets} config={config}/>
                    </div>

                    <div className="col-md-3">
                        <ConfigBar config={config}/>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('app')
    );
})
