import { createElement } from "react";
import getDisplayName from "react-display-name";

const withLog = ( getMessageToLog = (props) => props ) => (Target) => {
    if(process.env.NODE_ENV === 'production'){
        return Target;
    }

    const displayName = `withlog(${getDisplayName(Target)})`;

    const WithLog = (props) => {
        console.log(`${displayName}`, getMessageToLog(props));
        return createElement(Target, props);
    }

    WithLog.displayName = displayName;

    return WithLog;
}

export default withLog;