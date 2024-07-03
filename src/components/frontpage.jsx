import '../styling/frontpage.scss';

function frontpage() {
    return (
        <div className="frontpage">
            <div className="row">
                <div className="col-md-8">
                    <div className="textbox">
                        <div className="text">Hi there!</div>
                        <div className="name">I'm <span style={{ color: '#377747' }}>Gene Zijlmans</span></div>
                        <div className="function">Full Stack developer</div>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="picture"></div>
                </div>
            </div>

        </div>
    )
}

export default frontpage
  