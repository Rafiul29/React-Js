import React from "react";

const WireHouseContext = React.createContext();
const WireHouseProvider = WireHouseContext.Provider;
const WireHousesumer = WireHouseContext.Consumer;

export {WireHouseProvider,WireHousesumer};