import {Capacitor} from "@capacitor/core";

export const isWebContext = () => {
  return !Capacitor.isNativePlatform();
}
