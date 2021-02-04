export default (actions=[],prefix='') => {
    let actionTypes = {}
    actions.forEach(actionName => {
        const prefixedName = `${prefix  }_${  actionName}`;
        actionTypes = { 
            ...actionTypes, 
            [actionName]: prefixedName
        }
    });
    return actionTypes
}