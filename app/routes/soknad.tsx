import {Form, useActionData} from "@remix-run/react";
import {ActionFunction, json, redirect} from "@remix-run/node";

export const action: ActionFunction = async ({request}) => {
    const formData = await request.formData();

    const fnr = formData.get("fnr");
    if (fnr?.toString().length != 11) {
        const values = Object.fromEntries(formData);
        const errors = {"name": "fnr", "description": "Feil"}
        return json({errors, values});
    }
    // Her leker vi at vi sender dataene inn til the real deal.

    return redirect("/resultat")
}

export default function Soknad() {
    const actionData = useActionData();

    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.4"}}>
            <h1>Søknad om foreldrepengar ved fødsel</h1>
            <Form method="post" action="/soknad">
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
                        <input type="radio" id="foreldrepengar-medmor" name="1-hva-soker-om"
                               value="foreldrepengar-medmor"/>
                    </>
                    <>
                        <label>Foreldrepengar fordi du tek over foreldreansvaret eller omsorga</label>
                        <input type="radio" id="foreldrepengar-omsorg-overtakelse" name="1-hva-soker-om"
                               value="foreldrepengar-omsorg-overtakelse"/>
                    </>
                </fieldset>
                <>
                    <label>1.1 Namnet på søkjaren </label>
                    <input type="text" id="1.1-namn-soker" name="1.1-namn-soker" required={true}/>
                </>
                <>
                    <label>Fødselsnummer, 11 siffer</label>
                    <input type="number" id="fnr" name="fnr" required={true}/>
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
                    <textarea id="1.2-budd-nei-land" name="1.2-budd-nei-land" required={false}/>
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
                    <textarea id="1.2-skal-bu-nei-land" name="1.2-skal-bu-nei-land" required={false}/>
                </fieldset>
                <legend>2. Inntektsgivande arbeid</legend>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>Arbeidsgivar eller næringsverksemd</th>
                        <th colSpan={2} scope="colgroup">Periode</th>
                    </tr>
                    <tr>
                        <td/>
                        <th scope="col">Fra dato</th>
                        <th scope="col">Til dato</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><input type="text" id="2-arbeidsgivar-1" name="2-arbeidsgivar-1"/>
                        </td>
                        <td><input type="date" id="2-periode-fra-1" name="2-periode-fra-1"/>
                        </td>
                        <td><input type="date" id="2-periode-til-1" name="2-periode-til-1"/>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" id="2-arbeidsgivar-2" name="2-arbeidsgivar-2"/>
                        </td>
                        <td><input type="date" id="2-periode-fra-2" name="2-periode-fra-2"/>
                        </td>
                        <td><input type="date" id="2-periode-til-2" name="2-periode-til-2"/>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="text" id="2-arbeidsgivar-3" name="2-arbeidsgivar-3"/>
                        </td>
                        <td><input type="date" id="2-periode-fra-3" name="2-periode-fra-3"/>
                        </td>
                        <td><input type="date" id="2-periode-til-3" name="2-periode-til-3"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                {actionData?.errors ? (
                    <p style={{ color: "red" }}>
                        Fyll ut skjema.
                    </p>
                ) : null}
                <button>Send inn</button>
            </Form>
        </div>
    );
}

