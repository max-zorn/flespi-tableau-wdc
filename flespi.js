(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
		var colsCustomerStatistics = [{
			id: 'api_calls',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'api_tokens',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'api_traffic',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'calcs_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'calcs_devices_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'calcs_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'cdns_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'cdns_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'channels_connections',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'channels_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'channels_messages',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'channels_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'channels_traffic',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'cid',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'containers_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'containers_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'devices_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'devices_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'limits_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'modems_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'modems_sms',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'mqtt_messages',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'mqtt_retained_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'mqtt_sessions',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'mqtt_sessions_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'mqtt_subscriptions_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'plugins_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'sla',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'streams_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'streams_messages',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'streams_storage',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'streams_traffic',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'subaccounts_count',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'timestamp',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'refresh_date',
			dataType: tableau.dataTypeEnum.int
		}];

		var tableSchemaCustomerStatistics = {
			id: "customerStatistics",
			alias: "Customer statistics",
			columns: colsCustomerStatistics
	    };

	    var colsDevicesInfo = [{
	    	id: 'id',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'device_type_id',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'is_connected',
			dataType: tableau.dataTypeEnum.bool
			}, {
			id: 'blocked',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'ident',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'name',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'phone',
			dataType: tableau.dataTypeEnum.string
			}, {
			id: 'last_active',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'messages_TTL',
			dataType: tableau.dataTypeEnum.int
			}, {
			id: 'refresh_date',
			dataType: tableau.dataTypeEnum.int
			// }, {
			// id: 'gnss_beidou',
			// dataType: tableau.dataTypeEnum.bool
			// }, {
			// id: 'gnss_galileo',
			// dataType: tableau.dataTypeEnum.bool
			// }, {
			// id: 'gnss_glonass',
			// dataType: tableau.dataTypeEnum.bool
			// }, {
			// id: 'gnss_gps',
			// dataType: tableau.dataTypeEnum.bool
			// }, {
			// id: 'gprs_apn',
			// dataType: tableau.dataTypeEnum.string
			// }, {
			// id: 'gprs_enabled',
			// dataType: tableau.dataTypeEnum.bool
			// }, {
			// id: 'gprs_server_host',
			// dataType: tableau.dataTypeEnum.string
			// }, {
			// id: 'gprs_server_port',
			// dataType: tableau.dataTypeEnum.int
			// }, {
			// id: 'gprs_server_protocol',
			// dataType: tableau.dataTypeEnum.int
		}];

		var tableSchemaDevicesInfo = {
			id: "devicesInfo",
			alias: "Devices info",
			columns: colsDevicesInfo
	    };

	    schemaCallback([tableSchemaCustomerStatistics, tableSchemaDevicesInfo]);

    };

    myConnector.getData = function(table, doneCallback) {
    	if (table.tableInfo.id == 'customerStatistics') {
    		$.ajax('https://ru.flespi.io/platform/customer/statistics?data={"count":100,"reverse":true}', {
	    		success: function(resp) {
			    	var feat = resp.result,
			        	tableData = [];

					for (var i = 0, len = feat.length; i < len; i++) {
					    tableData.push({
					        "api_calls": feat[i].api_calls,
					        "api_tokens": feat[i].api_tokens,
					        "api_traffic": feat[i].api_traffic,
					        "calcs_count": feat[i].calcs_count,
					        "calcs_devices_count": feat[i].calcs_devices_count,
					        "calcs_storage": feat[i].calcs_storage,
							"cdns_count": feat[i].cdns_count,
					        "cdns_storage": feat[i].cdns_storage,
					        "channels_connections": feat[i].channels_connections,
					        "channels_count": feat[i].channels_count,
					        "channels_messages": feat[i].channels_messages,
					        "channels_storage": feat[i].channels_storage,
					        "channels_traffic": feat[i].channels_traffic,
					        "cid": feat[i].cid,
					        "containers_count": feat[i].containers_count,
					        "containers_storage": feat[i].containers_storage,
					        "devices_count": feat[i].devices_count,
					        "devices_storage": feat[i].devices_storage,
					        "limits_count": feat[i].limits_count,
					        "modems_count": feat[i].modems_count,
					        "modems_sms": feat[i].modems_sms,
					        "mqtt_messages": feat[i].mqtt_messages,
					        "mqtt_retained_storage": feat[i].mqtt_retained_storage,
					        "mqtt_sessions": feat[i].mqtt_sessions,
					        "mqtt_sessions_storage": feat[i].mqtt_sessions_storage,
					        "mqtt_subscriptions_count": feat[i].mqtt_subscriptions_count,
					        "plugins_count": feat[i].plugins_count,
					        "sla": feat[i].sla,
					        "streams_count": feat[i].streams_count,
					        "streams_messages": feat[i].streams_messages,
					        "streams_storage": feat[i].streams_storage,
					        "streams_traffic": feat[i].streams_traffic,
					        "subaccounts_count": feat[i].subaccounts_count,
					        "timestamp": feat[i].timestamp,
					        "refresh_date": Date.now(),
					    });
					}
					table.appendRows(tableData);
					doneCallback();
				},
				headers: {
					"Accept": "application/json",
					"Authorization":"FlespiToken " + tableau.password
				}
			});
    	}
   		
   		if (table.tableInfo.id == 'devicesInfo') {
   			$.ajax('https://ru.flespi.io/gw/devices/all?fields=last_active,id,name,device_type_id,settings,messages_ttl,blocked,connected,configuration', {
	    		success: function(resp) {
			    	var feat = resp.result,
			        	tableData = [];

					for (var i = 0, len = feat.length; i < len; i++) {
					    tableData.push({
					    	"id": feat[i].id,
					    	"device_type_id": feat[i].device_type_id,
					    	"is_connected": feat[i].connected,
					        "blocked": feat[i].blocked,
					    	"ident": feat[i].configuration.ident,
					    	"name": feat[i].name,
					    	"phone": feat[i].configuration.phone,
					    	"last_active": feat[i].last_active,
							"messages_TTL": feat[i].messages_ttl,
					        // "gnss_beidou": feat[i].settings.gnss_source.current.beidou,
					        // "gnss_galileo": feat[i].settings.gnss_source.current.galileo,
					        // "gnss_glonass": feat[i].settings.gnss_source.current.glonass,
					        // "gnss_gps": feat[i].settings.gnss_source.current.gps,
					        // "gprs_apn": feat[i].settings.gprs.current.apn,
					        // "gprs_enabled": feat[i].settings.gprs.current.enabled,
					        // "gprs_server_host": feat[i].settings.gprs_server.current.host,
					        // "gprs_server_port": feat[i].settings.gprs_server.current.port,
					        // "gprs_server_protocol": feat[i].settings.gprs_server.current.protocol,
					        "refresh_date": Date.now(),
					    });
					}
					table.appendRows(tableData);
					doneCallback();
				},
				headers: {
					"Accept": "application/json",
					"Authorization":"FlespiToken " + tableau.password
				}
			});
   		}
	};

    tableau.registerConnector(myConnector);

$(document).ready(function () {
    $("#submitButton").click(function () {
    	tableau.connectionName = "flespidata";
        tableau.password = $("#input_token").val();
        tableau.submit();
    });
});

})();