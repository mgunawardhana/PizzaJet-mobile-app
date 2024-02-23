import React from "react";
import * as WebBrowser from "expo-web-browser";
import {useEffect} from "react";
 
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};