import './card.css'

function Card() {
    return(
        <>
            <div className="card-container">
                <div className="card">
                    <div className="left">
                        {/* QR CODE */}
                        <img src="" alt="" />
                    </div>
                    <div className="right">
                        <h1>Stacey-Lee Pietersen</h1>
                        <div className="info">
                            {/* possibly grid */}
                            <div className="grid-left">
                                <div className="small">Date of Birth</div>
                                <div className="grid-info">2 JUL 2003</div>
                                <div className="small">Pronouns</div>
                                {/* dont stress. youre gonna die soon be unapologetic */}
                                <div className="grid-info">They/Them</div>
                            </div>
                            <div className="grid-right">
                                <div className="small">Date of Birth</div>
                                <div className="grid-info">2 JUL 2003</div>
                                <div className="small">Pronouns</div>
                                {/* dont stress. youre gonna die soon be unapologetic */}
                                <div className="grid-info">They/Them</div>
                                {/* for reference */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* make footer that underlines the entire card */}
            </div>
        </>
    )
}

export default Card