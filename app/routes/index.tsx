import {useState} from "react";

export default function Index() {
    const [namn, setNamn] = useState("")
    const [fnr, setFnr] = useState("")

    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Søknad om foreldrepengar ved fødsel</h1>

            <fieldset>
                <legend>1. Kva søkjer du om?</legend>
                <>
                    <label>Foreldrepengar til mor</label>
                    <input type="radio" id="foreldrepengar-mor" name="1-hva-soker-om" value="foreldrepengar-mor"/>
                </>
                <>
                    <label>Foreldrepengar til far</label>
                    <input type="radio" id="foreldrepengar-far" name="1-hva-soker-om" value="foreldrepengar-far"/>
                </>
                <>
                    <label>Foreldrepengar til medmor</label>
                    <input type="radio" id="foreldrepengar-medmor" name="1-hva-soker-om" value="foreldrepengar-medmor"/>
                </>
                <>
                    <label>Foreldrepengar fordi du tek over foreldreansvaret eller omsorga</label>
                    <input type="radio" id="foreldrepengar-omsorg-overtakelse" name="1-hva-soker-om"
                           value="foreldrepengar-omsorg-overtakelse"/>
                </>
            </fieldset>
            <>
                <label>1.1 Namnet på søkjaren </label>
                <input type="text" id="1.2-namn-soker" required={true} value={namn}
                       onChange={(event) => setNamn(event.target.value)}/>
            </>
            <>
                <label>Fødselsnummer, 11 siffer</label>
                <input type="number" id="fnr" required={true} value={fnr}
                                  onChange={(event) => setFnr(event.target.value)}/>
            </>
        </div>
    );
}
