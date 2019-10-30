var root = "http://127.0.0.1:5000";

const FlowersAPI = {  
  catalogsGet: function(){
    return fetch(root + "/catalogs");
  },
  catalogGet: function(catalog_name){
    return fetch(root + "/catalog?catalog_name=" + catalog_name);
  },
  plantGet: function(plant_name){
    return fetch(root + "/plant?plant_name=" + plant_name);
  }
}

export default FlowersAPI
