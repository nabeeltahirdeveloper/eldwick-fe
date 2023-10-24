const app = () => {
  return (
    <div>
      <h1>Eldwick Creamery</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          alignContent: "center",
          gap: 8,
        }}
      >
        <div>
          <img src="/vector.jpg" alt="picture" />
        </div>
        <div>
          <h1
            style={{
              marginLeft: "-72px",
              fontSize: "50px",
            }}
          >
            MAKE SHEET
          </h1>
          <h2
            style={{
              fontSize: "40px",
            }}
          >
            Brie By Gum (incl truffle)
          </h2>
        </div>
      </div>

      <form action="#" method="post">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "163px",
            gap: 10,
          }}
        >
          <label>
            Batch Number:{" "}
            <input
              style={{ height: "24px", width: "200px" }}
              type="text"
              name="batchNumber"
            />
          </label>
          <label>
            Date:{" "}
            <input
              style={{ height: "24px", width: "200px", fontSize: "14px" }}
              type="date"
              name="date"
            />
          </label>
        </div>

        {/* <!-- ... Previous sections ... --> */}

        <div
          style={{
            marginTop: "24px",
            display: "flex",
          }}
        >
          <label>
            Milk{" "}
            <input
              style={{
                borderLeft: "0px",
                borderRight: "0px",
                borderTop: "0px",
              }}
              type="text"
            />{" "}
            litres, Milner Field Farm. Temp{" "}
            <input
              style={{
                borderLeft: "0px",
                borderRight: "0px",
                borderTop: "0px",
              }}
              type="text"
            />{" "}
            degrees c,{" "}
            <input
              style={{
                borderLeft: "0px",
                borderRight: "0px",
                borderTop: "0px",
              }}
              type="text"
            />{" "}
            PH
          </label>
        </div>

        {/* <!-- ... Previous sections ... --> */}

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <table>
            <tr>
              <th>Ingredient</th>
              <th>Type</th>
              <th>Supplier</th>
              <th>Batch</th>
              <th>BBE</th>
              <th>Quantity</th>
            </tr>
            <tr>
              <td>Starter</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Cal. Chl.</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Rennet</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Geo</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>PC</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Salt</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Truffle (opt)</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Clean down procedure followed</p>
            <p>Y/N</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <label>
              Signed : <input type="text" />
            </label>
            <label>
              Time : <input type="text" />
            </label>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8%",
          }}
        >
          <table
            style={{
              width: "45%",
              height: "auto",
            }}
          >
            <tr>
              <th> Production</th>
            </tr>
            <tr>
              <td>Time in Vat</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time Calc. (vat off)</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time/Temp at culture</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time/PH at rennet</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time/Ph at mould</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time finished mould</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time turn 1 (+6)</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time turn 2 (+18)</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time /PH salting</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Second salting (+12)</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Temp/Time de-mould</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time/date into boxes</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <td>
              <textarea
                style={{ border: "none", fontSize: "18px" }}
                placeholder="Observations"
                name="text"
                id="textID"
              ></textarea>
            </td>
          </table>
          <table
            style={{
              width: "45%",
              height: "auto",
            }}
          >
            <tr>
              <th>Temperature Record</th>
            </tr>
            <tr>
              <td>Day 1 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 2 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 3 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 4 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 5 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 6 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 7 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 8 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 9 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 10 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 11 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 12 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 13 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Day 14 AM/PM</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <td>
              <textarea
                name="text"
                id="text"
                placeholder="Date Wrapped"
                style={{ border: "none", fontSize: "18px" }}
              ></textarea>
            </td>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8%",
          }}
        >
          <table
            style={{
              width: "45%",
              height: "auto",
            }}
          >
            <tr>
              <th>Final Yield</th>
            </tr>
            <tr>
              <td>Total Yield (Kgs)</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>200g BBG</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>200g truffle BBG</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Cutter BBG</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Cutter truffle BBG</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Other</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
          <table
            style={{
              width: "45%",
              height: "auto",
            }}
          >
            <tr>
              <th>Disposal Details</th>
            </tr>
            <tr>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8%",
          }}
        >
          <textarea
            style={{
              width: "45%",
              height: "150px",
              fontSize: "18px",
            }}
            name="text"
            placeholder="Comments/Observations"
          ></textarea>
          <table
            style={{
              width: "45%",
              height: "auto",
            }}
          >
            <tr>
              <th>Compliance with HACCP/FSMS</th>
            </tr>
            <tr>
              <td>Signed</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <input
                  style={{
                    border: "none",
                  }}
                  type="text"
                />
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  );
};

export default app;
