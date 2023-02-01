import "./analytics.scss"

export default function Analytics() {
    return (
        <div className='analytics'>
            <div className="analyticsTop">
                <span>Analytics</span>
                <p>Last 30 days activity</p>
            </div>
            <div className='analyticsBottom'>
                <div>
                    <div>
                        <span style={{fontSize:"14px"}}>
                            Search Appearences
                        </span>
                        <p>Discover how often you appear in search results</p>
                    </div>
                    <span>
                        126
                    </span>
                </div>
               
                <div>
                    <div>
                        <span>
                            New Followers
                        </span>
                        <p>Discover new followers</p>
                    </div>
                    <span>
                        126
                    </span>
                </div>
                <div>
                    <div>
                        <span>
                            Unique Visitors
                        </span>
                        <p>Discover who viewed your profile</p>
                    </div>
                    <span>
                        0
                    </span>
                </div>
            </div>
        </div>

    )
}
