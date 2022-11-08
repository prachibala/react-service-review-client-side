const { useEffect } = require("react");

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Snack Box`;
    }, [title]);
};
export default UseTitle;
