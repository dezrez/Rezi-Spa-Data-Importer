
const addgroup = 'https://localapi.dezrez.com/api/group/addgroup';
const addproperty = 'https://localapi.dezrez.com/api/property/add';
const getallgroups = "https://localapi.dezrez.com/api/globalsearch/groups?pageSize=25&pageNumber=1&term=*&excludeDeleted=true&GroupTypes=Groups";
const recordval = "https://localapi.dezrez.com/api/property/recordvaluation?branchId=1";
const instruct = "https://localapi.dezrez.com/api/progression/sales/instructtosell";
const setflags = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/setflags`;
}
const addPropertyToGroupUrl = (id) => {
    return `https://localapi.dezrez.com/api/property/${id}/addgrouptoproperty`;
}
const addSalesSearch = (id) => {
    return `https://localapi.dezrez.com/api/group/${id}/savesalessearch`;
}

export {
addSalesSearch,
addgroup,
addproperty,
getallgroups,
addPropertyToGroupUrl,
instruct,
recordval,
setflags
};
