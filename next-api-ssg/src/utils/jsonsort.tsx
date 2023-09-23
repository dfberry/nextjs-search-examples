function isObject(v) {
    return '[object Object]' === Object.prototype.toString.call(v);
  };
  
  // Alpha sort JSON for easy reading
export function sortJson(o) {
    if (Array.isArray(o)) {
        return o.sort().map(sortJson);
    } else if (isObject(o)) {
        return Object
            .keys(o)
            .sort()
            .reduce(function (a, k) {
                a[k] = sortJson(o[k]);
  
                return a;
            }, {});
    }
    return o;
  }

function sortByProperty(property){  
    return function(a,b){  
       if(a[property] > b[property])  
          return 1;  
       else if(a[property] < b[property])  
          return -1;  
   
       return 0;  
    }  
 }
 // Alpha sort JSON array for easy reading
 export function sortJsonArray(jsonArray, property){
    return jsonArray.sort(sortByProperty(property));
  }
