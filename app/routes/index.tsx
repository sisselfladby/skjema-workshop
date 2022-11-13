import {useState} from "react";

export default function Index() {
    // 1
    // const [sokerOm, setSokerOm] = useState("") finn ut av value i radio
    const [namn, setNamn] = useState("")
    const [fnr, setFnr] = useState("")
    const [buddLand, setBuddLand] = useState("")
    const [skalBuLand, setSkalBuLand] = useState("")


    // 2
    const [arbeidsgivar1, setArbeidsgivar1] = useState("")
    const [arbeidsgivar2, setArbeidsgivar2] = useState("")
    const [arbeidsgivar3, setArbeidsgivar3] = useState("")

    const [periodeFra1, setPeriodeFra1] = useState("")
    const [periodeFra2, setPeriodeFra2] = useState("")
    const [periodeFra3, setPeriodeFra3] = useState("")

    const [periodeTil1, setPeriodeTil1] = useState("")
    const [periodeTil2, setPeriodeTil2] = useState("")
    const [periodeTil3, setPeriodeTil3] = useState("")


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
                <input type="text" id="1.1-namn-soker" required={true} value={namn}
                       onChange={(event) => setNamn(event.target.value)}/>
            </>
            <>
                <label>Fødselsnummer, 11 siffer</label>
                <input type="number" id="fnr" required={true} value={fnr}
                                  onChange={(event) => setFnr(event.target.value)}/>
            </>
            <fieldset>
                <legend>1.2. Planlegg du å vere i Noreg på fødselstidspunktet?</legend>
                <>
                    <label>Ja</label>
                    <input type="radio" id="1.2-ja" name="1.2" value={1}/>
                </>
                <>
                    <label>Nei</label>
                    <input type="radio" id="1.2-nei" name="1.2" value={0}/>
                </>
            </fieldset>
            <fieldset>
                <legend>Har du budd i Noreg i dei siste 12 månadene</legend>
                <>
                    <label>Ja</label>
                    <input type="radio" id="1.2-budd-ja" name="1.2-budd" value={1}/>
                </>
                <>
                    <label>Nei</label>
                    <input type="radio" id="1.2-budd-nei" name="1.2-budd" value={0}/>
                </>
                <label>Dersom nei, kva land har du opphalde deg i, og i kva periode?</label>
                <textarea id="1.2-budd-nei-land" required={false} value={buddLand}
                       onChange={(event) => setBuddLand(event.target.value)}/>
            </fieldset>
            <fieldset>
                <legend>Skal du bu i Noreg i dei neste 12 månadene</legend>
                <>
                    <label>Ja</label>
                    <input type="radio" id="1.2-skal-bu-ja" name="1.2-skal-bu" value={1}/>
                </>
                <>
                    <label>Nei</label>
                    <input type="radio" id="1.2-skal-bu-nei" name="1.2-skal-bu" value={0}/>
                </>
                <label>Dersom nei, kva land skal du opphalde deg i, og i kva periode?</label>
                <textarea id="1.2-skal-bu-nei-land" required={false} value={skalBuLand}
                       onChange={(event) => setSkalBuLand(event.target.value)}/>
            </fieldset>
            <legend>2. Inntektsgivande arbeid</legend>
            <table border={1}>
                <col />
                <colgroup span={2} />
                <tr>
                    <th>Arbeidsgivar eller næringsverksemd</th>
                    <th colSpan={2} scope="colgroup">Periode</th>
                </tr>
                <tr>
                    <td />
                    <th scope="col">Fra dato</th>
                    <th scope="col">Til dato</th>
                </tr>
                <tr>
                    <td><input type="text" id="2-arbeidsgivar-1" value={arbeidsgivar1}
                               onChange={(event) => setArbeidsgivar1(event.target.value)}/>
                    </td>
                    <td><input type="date" id="2-periode-fra-1" value={periodeFra1}
                               onChange={(event) => setPeriodeFra1(event.target.value)}/>
                    </td>
                    <td><input type="date" id="2-periode-til-1" value={periodeTil1}
                               onChange={(event) => setPeriodeTil1(event.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td><input type="text" id="2-arbeidsgivar-2" value={arbeidsgivar2}
                               onChange={(event) => setArbeidsgivar2(event.target.value)}/>
                    </td>
                    <td><input type="date" id="2-periode-fra-2" value={periodeFra2}
                               onChange={(event) => setPeriodeFra2(event.target.value)}/>
                    </td>
                    <td><input type="date" id="2-periode-til-2" value={periodeTil2}
                               onChange={(event) => setPeriodeTil2(event.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td><input type="text" id="2-arbeidsgivar-3" value={arbeidsgivar3}
                               onChange={(event) => setArbeidsgivar3(event.target.value)}/>
                    </td>
                    <td><input type="date" id="2-periode-fra-3" value={periodeFra3}
                               onChange={(event) => setPeriodeFra3(event.target.value)}/>
                    </td>
                    <td><input type="date" id="2-periode-til-3" value={periodeTil3}
                               onChange={(event) => setPeriodeTil3(event.target.value)}/>
                    </td>
                </tr>
            </table>
        </div>
    );
}
