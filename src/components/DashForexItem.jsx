const DashForexItem = (props) => {
    return (
        <div className="DashForexItem DashForexGrid">
            <div
                className="DashForexFlag"
                style={{
                    background: `url(/img/flags/${props.data.countryCode.toLowerCase()}.svg) center/cover`,
                }}
            />
            <p>{}xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
            <p>xxx</p>
        </div>
    );
};

export default DashForexItem;
