import React from 'react'
import Head from 'next/head'

const page = () => {
  return (
    <div>
      
<Head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAKE SHEET - Brie By Gum (incl truffle)</title>
    <style>
        body {{
            fontFamily: "Arial, sans-serif",
            margin: "2em"
        }}
        h1, h2, h3 {{
            textAlign: center
        }}
        table {{
            width: "100%",
            marginBottom: "1em",
            borderCollapse: "collapse"
        }}
        th, td {{
            border: "1px solid black",
            padding: "0.5em"
        }}
    </style>
</Head>
<body>
    <h1>Eldwick Creamery</h1>
    <h2>MAKE SHEET</h2>
    <h3>Brie By Gum (incl truffle)</h3>

    <form action="#" method="post">
        <label>Batch Number: <input type="text" name="batchNumber"></label>
        <label>Date: <input type="date" name="date"/></label>

        {/* <!-- ... Previous sections ... --> */}

        <h4>Production:</h4>
        <table>
            <tr>
                <th>Time In Vat</th>
                <th>Time Calc. (vat off)</th>
                <th>Time/Temp at culture</th>
                <th>Time/PH at rennet</th>
                <th>Time/PH at mould</th>
                <th>Time turn 1 (+6)</th>
                {/* <!-- ... --> */}
            </tr>
            <tr>
                <td><input type="time" name="timeInVat"/></td>
                <td><input type="time" name="timeCalcVatOff"/></td>
                <td><input type="text" name="timeTempCulture"/></td>
                <td><input type="text" name="timePHRennet"/></td>
                <td><input type="text" name="timePHMould"/></td>
                <td><input type="text" name="timeTurn1"/></td>
                {/* <!-- ... --> */}
            </tr>
        </table>

        <h4>Temperature Record:</h4>
        <table>
            <tr>
                <th>Day 1 AM/PM</th>
                <th>Day 2 AM/PM</th>
                {/* <!-- ... Continue for 14 days ... --> */}
            </tr>
            <tr>
                <td><input type="text" name="day1Temp"/></td>
                <td><input type="text" name="day2Temp"/></td>
                {/* <!-- ... Add other input fields for 14 days ... --> */}
            </tr>
        </table>

        <h4>Final Yield:</h4>
        <table>
            <tr>
                <th>Total Yield (Kgs)</th>
                <th>200g BBG</th>
                <th>200g truffle BBG</th>
                <th>Cutter BBG</th>
                <th>Cutter Truffle BBG</th>
                <th>Other</th>
            </tr>/
            <tr>
                <td><input type="number" name="totalYield"/></td>
                <td><input type="number" name="200gBBG"/></td>
                <td><input type="number" name="200gTruffleBBG"/></td>
                <td><input type="number" name="cutterBBG"/></td>
                <td><input type="number" name="cutterTruffleBBG"/></td>
                <td><input type="text" name="otherYield"/></td>
            </tr>
        </table>

        <h4>Disposal Details:</h4>
        <textarea name="disposalDetails" rows="4" cols="50"></textarea>

        <h4>Comments/Observations:</h4>
        <textarea name="comments" rows="4" cols="50"></textarea>

        <h4>Compliance with HACCP/FSMS:</h4>
        <table>
            <tr>
                <th>Signed</th>
                <th>Time</th>
                <th>Date</th>
            </tr>
            <tr>
                <td><input type="text" name="signedCompliance"/></td>
                <td><input type="time" name="timeCompliance"/></td>
                <td><input type="date" name="dateCompliance"/></td>
            </tr>
        </table>

        <input type="submit" value="Submit"/>
    </form>
</body>


    </div>
  )
}

export default page

