"use clients";

import React, { useState, useEffect } from "react";
import styles from "./RecipeForm.module.css"; // Import the CSS module
import { Poppins } from "next/font/google";
import axios from "axios";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function RecipeForm({ recipe, fetchData, setSelectedRecipe }) {
  const [batchNo, setBatchNo] = useState("");
  const [date, setDate] = useState("");
  const [milk, setMilk] = useState("");
  const [cream, setCream] = useState("");
  const [ingredientType, setIngredientType] = useState({
    starter: "",
    calChl: "",
    rennet: "",
    geo: "",
    pc: "",
    salt: "",
    truffle: "",
  });
  const [ingredientSupplier, setIngredientSupplier] = useState({
    starter: "JKM",
    calChl: "JKM",
    rennet: "JKM",
    geo: "JKM",
    pc: "JKM",
    salt: "JKM",
    truffle: "JKM",
  });
  const [ingredientBatch, setIngredientBatch] = useState({
    starter: "",
    calChl: "",
    rennet: "",
    geo: "",
    pc: "",
    salt: "",
    truffle: "",
  });
  const [ingredientBbe, setIngredientBbe] = useState({
    starter: "",
    calChl: "",
    rennet: "",
    geo: "",
    pc: "",
    salt: "",
    truffle: "",
  });
  const [ingredientQuantity, setIngredientQuantity] = useState({
    starter: "",
    calChl: "",
    rennet: "",
    geo: "",
    pc: "",
    salt: "",
    truffle: "",
  });
  const [cleanDown, setCleanDown] = useState("");
  const [cleanDownSigned, setCleanDownSigned] = useState("");
  const [cleanDownTime, setCleanDownTime] = useState("");
  const [timeInVat, setTimeInVat] = useState("");
  const [timeCalc, setTimeCalc] = useState("");
  const [timeCulture, setTimeCulture] = useState("");
  const [timeRennet, setTimeRennet] = useState("");
  const [timeMould, setTimeMould] = useState("");
  const [timeMouldFinished, setTimeMouldFinished] = useState("");
  const [timeTurn1, setTimeTurn1] = useState("");
  const [timeTurn2, setTimeTurn2] = useState("");
  const [timeSalt, setTimeSalt] = useState("");
  const [timeSalt2, setTimeSalt2] = useState("");
  const [timeDemould, setTimeDemould] = useState("");
  const [observation, setObservation] = useState("");
  const [timeBox, setTimeBox] = useState("");
  const [tempRecords, setTempRecords] = useState({
    day1: {
      am: "",
      pm: "",
    },
    day2: {
      am: "",
      pm: "",
    },
    day3: {
      am: "",
      pm: "",
    },
    day4: {
      am: "",
      pm: "",
    },
    day5: {
      am: "",
      pm: "",
    },
    day6: {
      am: "",
      pm: "",
    },
    day7: {
      am: "",
      pm: "",
    },
    day8: {
      am: "",
      pm: "",
    },
    day9: {
      am: "",
      pm: "",
    },
    day10: {
      am: "",
      pm: "",
    },
    day11: {
      am: "",
      pm: "",
    },
    day12: {
      am: "",
      pm: "",
    },
    day13: {
      am: "",
      pm: "",
    },
    day14: {
      am: "",
      pm: "",
    },
  });
  const [dateWrapped, setDateWrapped] = useState("");
  const [totalYield, setTotalYield] = useState("");
  const [bbg, setBbg] = useState("");
  const [truffleBbg, setTruffleBbg] = useState("");
  const [cutterBbg, setCutterBbg] = useState("");
  const [cutterTruffleBbg, setCutterTruffleBbg] = useState("");
  const [other, setOther] = useState("");
  const [disposal, setDisposal] = useState({
    one: {
      name: "",
      amount: "",
    },
    two: {
      name: "",
      amount: "",
    },
    three: {
      name: "",
      amount: "",
    },
    four: {
      name: "",
      amount: "",
    },
    five: {
      name: "",
      amount: "",
    },
    six: {
      name: "",
      amount: "",
    },
  });
  const [complianceSigned, setComplianceSigned] = useState("");
  const [complianceTime, setComplianceTime] = useState("");
  const [complianceDate, setComplianceDate] = useState("");
  const [observations, setObservations] = useState("");

  const dayData = [
    {
      day: "Day 1 AM/PM",
      key: "day1",
    },
    {
      day: "Day 2 AM/PM",
      key: "day2",
    },
    {
      day: "Day 3 AM/PM",
      key: "day3",
    },
    {
      day: "Day 4 AM/PM",
      key: "day4",
    },
    {
      day: "Day 5 AM/PM",
      key: "day5",
    },
    {
      day: "Day 6 AM/PM",
      key: "day6",
    },
    {
      day: "Day 7 AM/PM",
      key: "day7",
    },
    {
      day: "Day 8 AM/PM",
      key: "day8",
    },
    {
      day: "Day 9 AM/PM",
      key: "day9",
    },
    {
      day: "Day 10 AM/PM",
      key: "day10",
    },
    {
      day: "Day 11 AM/PM",
      key: "day11",
    },
    {
      day: "Day 12 AM/PM",
      key: "day12",
    },
    {
      day: "Day 13 AM/PM",
      key: "day13",
    },
    {
      day: "Day 14 AM/PM",
      key: "day14",
    },
  ];

  useEffect(() => {
    if (recipe) {
      setBatchNo(recipe.batchNo);
      setDate(recipe.date);
      setMilk(recipe.milk);
      setCream(recipe.cream);
      setIngredientType(recipe.ingredientType);
      setIngredientSupplier(recipe.ingredientSupplier);
      setIngredientBatch(recipe.ingredientBatch);
      setIngredientBbe(recipe.ingredientBbe);
      setIngredientQuantity(recipe.ingredientQuantity);
      setCleanDown(recipe.cleanDown);
      setCleanDownSigned(recipe.cleanDownSigned);
      setCleanDownTime(recipe.cleanDownTime);
      setTimeInVat(recipe.timeInVat);
      setTimeCalc(recipe.timeCalc);
      setTimeCulture(recipe.timeCulture);
      setTimeRennet(recipe.timeRennet);
      setTimeMould(recipe.timeMould);
      setTimeMouldFinished(recipe.timeMouldFinished);
      setTimeTurn1(recipe.timeTurn1);
      setTimeTurn2(recipe.timeTurn2);
      setTimeSalt(recipe.timeSalt);
      setTimeSalt2(recipe.timeSalt2);
      setTimeDemould(recipe.timeDemould);
      setObservation(recipe.observation);
      setTimeBox(recipe.timeBox);
      setTempRecords(recipe.tempRecords);
      setDateWrapped(recipe.dateWrapped);
      setTotalYield(recipe.totalYield);
      setBbg(recipe.bbg);
      setTruffleBbg(recipe.truffleBbg);
      setCutterBbg(recipe.cutterBbg);
      setCutterTruffleBbg(recipe.cutterTruffleBbg);
      setOther(recipe.other);
      setDisposal(recipe.disposal);
      setComplianceSigned(recipe.complianceSigned);
      setComplianceTime(recipe.complianceTime);
      setComplianceDate(recipe.complianceDate);
      setObservations(recipe.observations);
    }
  }, [recipe]);

  const clearData = () => {
    setBatchNo("");
    setDate("");
    setMilk("");
    setCream("");
    setIngredientType({
      starter: "",
      calChl: "",
      rennet: "",
      geo: "",
      pc: "",
      salt: "",
      truffle: "",
    });
    setIngredientSupplier({
      starter: "",
      calChl: "",
      rennet: "",
      geo: "",
      pc: "",
      salt: "",
      truffle: "",
    });
    setIngredientBatch({
      starter: "",
      calChl: "",
      rennet: "",
      geo: "",
      pc: "",
      salt: "",
      truffle: "",
    });
    setIngredientBbe({
      starter: "",
      calChl: "",
      rennet: "",
      geo: "",
      pc: "",
      salt: "",
      truffle: "",
    });
    setIngredientQuantity({
      starter: "",
      calChl: "",
      rennet: "",
      geo: "",
      pc: "",
      salt: "",
      truffle: "",
    });
    setCleanDown("");
    setCleanDownSigned("");
    setCleanDownTime("");
    setTimeInVat("");
    setTimeCalc("");
    setTimeCulture("");
    setTimeRennet("");
    setTimeMould("");
    setTimeMouldFinished("");
    setTimeTurn1("");
    setTimeTurn2("");
    setTimeSalt("");
    setTimeSalt2("");
    setTimeDemould("");
    setObservation("");
    setTimeBox("");
    setTempRecords({
      day1: {
        am: "",
        pm: "",
      },
      day2: {
        am: "",
        pm: "",
      },
      day3: {
        am: "",
        pm: "",
      },
      day4: {
        am: "",
        pm: "",
      },
      day5: {
        am: "",
        pm: "",
      },
      day6: {
        am: "",
        pm: "",
      },
      day7: {
        am: "",
        pm: "",
      },
      day8: {
        am: "",
        pm: "",
      },
      day9: {
        am: "",
        pm: "",
      },
      day10: {
        am: "",
        pm: "",
      },
      day11: {
        am: "",
        pm: "",
      },
      day12: {
        am: "",
        pm: "",
      },
      day13: {
        am: "",
        pm: "",
      },
      day14: {
        am: "",
        pm: "",
      },
    });
    setDateWrapped("");
    setTotalYield("");
    setBbg("");
    setTruffleBbg("");
    setCutterBbg("");
    setCutterTruffleBbg("");
    setOther("");
    setDisposal({
      one: {
        name: "",
        amount: "",
      },
      two: {
        name: "",
        amount: "",
      },
      three: {
        name: "",
        amount: "",
      },
      four: {
        name: "",
        amount: "",
      },
      five: {
        name: "",
        amount: "",
      },
      six: {
        name: "",
        amount: "",
      },
    });
    setComplianceSigned("");
    setComplianceTime("");
    setComplianceDate("");
    setObservations("");

    fetchData();
  };

  const handleSubmit = async () => {
    const newRecipe = {
      batchNo,
      date,
      milk,
      cream,
      ingredientType,
      ingredientSupplier,
      ingredientBatch,
      ingredientBbe,
      ingredientQuantity,
      cleanDown,
      cleanDownSigned,
      cleanDownTime,
      timeInVat,
      timeCalc,
      timeCulture,
      timeRennet,
      timeMould,
      timeMouldFinished,
      timeTurn1,
      timeTurn2,
      timeSalt,
      timeSalt2,
      timeDemould,
      observation,
      timeBox,
      tempRecords,
      dateWrapped,
      totalYield,
      bbg,
      truffleBbg,
      cutterBbg,
      cutterTruffleBbg,
      other,
      disposal,
      complianceSigned,
      complianceTime,
      complianceDate,
      observations,
      lastUpdated: new Date().toLocaleString(),
    };

    console.log("newRecipe", recipe);

    if (recipe) {
      const res = await axios.post("/api/update-recipe", {
        ...newRecipe,
        id: recipe._id,
      });
      setSelectedRecipe();
    } else {
      const res = await axios.post("/api/add-recipe", newRecipe);
      console.log(res);
    }
    clearData();
  };

  const handleDelete = async () => {
    const res = await axios.post("/api/delete-recipe", { id: recipe._id });
    setSelectedRecipe();
    fetchData();
    clearData();
  };

  const [selectedRecipeState, setSelectedRecipeState] = useState("");

  useEffect(() => {
    switch (selectedRecipeState) {
      case "Brie By Gum":
        setIngredientType({
          starter: "Mix Complex",
          calChl: "",
          rennet: "",
          geo: "",
          pc: "",
          salt: "",
          truffle: "",
        });
        break;
      case "T’ Foot oft’ Stairs":
        setIngredientType({
          starter: "Mes Aroma",
          calChl: "",
          rennet: "",
          geo: "",
          pc: "",
          salt: "",
          truffle: "",
        });
        break;
      case "Other":
        setIngredientType({
          starter: "Mes LD",
          calChl: "",
          rennet: "",
          geo: "",
          pc: "",
          salt: "",
          truffle: "",
        });
        break;
      default:
        setIngredientType({
          starter: "",
          calChl: "",
          rennet: "",
          geo: "",
          pc: "",
          salt: "",
          truffle: "",
        });
    }
  }, [selectedRecipeState]);

  useEffect(() => {
    setBatchNo(Math.floor(Math.random() * 100000));
  }, []);

  const temperatureArray = Array.from(
    { length: 71 },
    (_, index) => (index + 300) / 10
  );
  return (
    <div className={`main-panel ${poppins.className}`}>
      <h1 style={{color:"purple" ,fontWeight:"bold",fontSize:"40px"}} className={poppins.className}>MAKE SHEET</h1>{" "}
      {/* Optional: Add a title if you'd like */}
      {/* <p className={poppins.className} style={{
        fontFamily: poppins
      }}>Brie By Gum (incl truffle)</p> */}
      <select
        style={{ padding: 10, borderRadius: 5, marginBottom: 10 }}
        name="recipeSelect"
        id="recipeSelect"
        onChange={(e) => {
          setSelectedRecipeState(e.target.value);
        }}
        value={selectedRecipeState}
      >
        <option value="">Selet the Recipe</option>
        <option value="Brie By Gum">Brie By Gum</option>
        <option value="T’ Foot oft’ Stairs">T’ Foot oft’ Stairs</option>
        <option value="Other">Other</option>
      </select>
      <div className={poppins.className}>
        <label htmlFor="batchNo">Batch Number :</label>
        <input
          id="batchNo"
          type="text"
          value={batchNo}
          onChange={(e) => setBatchNo(e.target.value)}
        />
      </div>
      <div className="date-picker">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-container">
        <div>
          <div>
            <label htmlFor="milk">
              <span style={{ fontWeight: "600" }}> Milk:</span> from{" "}
              {selectedRecipeState === "T’ Foot oft’ Stairs"
                ? "Yellisons"
                : "Milner fields"}
            </label>
            <input
              id="milk"
              type="text"
              value={milk}
              onChange={(e) => setMilk(e.target.value)}
            />
          </div>
          {selectedRecipeState === "T’ Foot oft’ Stairs" ||
          selectedRecipeState === "Other" ? null : (
            <div>
              <label htmlFor="cream">Cream: from Milner fields</label>
              <input
                id="cream"
                type="text"
                value={cream}
                onChange={(e) => setCream(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="ingredient-table">
          <table border="1" style={{ width: "100%",
                backgroundColor:"lightgrey",
                marginTop:"50px"}}>
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
                  type="text"
                  value={ingredientType.starter}
                  onChange={(e) =>
                    setIngredientType({
                      ...ingredientType,
                      starter: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.starter}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      starter: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.starter}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      starter: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.starter}
                  onChange={(e) =>
                    setIngredientBbe({
                      ...ingredientBbe,
                      starter: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.starter}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      starter: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Cal. Chl.</td>
              <td>
                <input
                  type="text"
                  value={ingredientType.calChl}
                  onChange={(e) =>
                    setIngredientType({
                      ...ingredientType,
                      calChl: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.calChl}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      calChl: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.calChl}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      calChl: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.calChl}
                  onChange={(e) =>
                    setIngredientBbe({
                      ...ingredientBbe,
                      calChl: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.calChl}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      calChl: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Rennet</td>
              <td>
                <input
                  type="text"
                  value={ingredientType.rennet}
                  onChange={(e) =>
                    setIngredientType({
                      ...ingredientType,
                      rennet: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.rennet}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      rennet: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.rennet}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      rennet: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.rennet}
                  onChange={(e) =>
                    setIngredientBbe({
                      ...ingredientBbe,
                      rennet: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.rennet}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      rennet: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Geo</td>
              <td>
                <input
                  type="text"
                  value={ingredientType.geo}
                  onChange={(e) =>
                    setIngredientType({
                      ...ingredientType,
                      geo: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.geo}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      geo: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.geo}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      geo: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.geo}
                  onChange={(e) =>
                    setIngredientBbe({ ...ingredientBbe, geo: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.geo}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      geo: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>PC</td>
              <td>
                <input
                  type="text"
                  value={ingredientType.pc}
                  onChange={(e) =>
                    setIngredientType({ ...ingredientType, pc: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.pc}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      pc: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.pc}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      pc: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.pc}
                  onChange={(e) =>
                    setIngredientBbe({ ...ingredientBbe, pc: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.pc}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      pc: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Salt</td>
              <td>
                <input
                  type="text"
                  value={ingredientType.salt}
                  onChange={(e) =>
                    setIngredientType({
                      ...ingredientType,
                      salt: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.salt}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      salt: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.salt}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      salt: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.salt}
                  onChange={(e) =>
                    setIngredientBbe({ ...ingredientBbe, salt: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.salt}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      salt: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
            <tr>
              <td>Truffle (opt)</td>
              <td>
                <input
                  type="text"
                  value={ingredientType.truffle}
                  onChange={(e) =>
                    setIngredientType({
                      ...ingredientType,
                      truffle: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientSupplier.truffle}
                  onChange={(e) =>
                    setIngredientSupplier({
                      ...ingredientSupplier,
                      truffle: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBatch.truffle}
                  onChange={(e) =>
                    setIngredientBatch({
                      ...ingredientBatch,
                      truffle: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientBbe.truffle}
                  onChange={(e) =>
                    setIngredientBbe({
                      ...ingredientBbe,
                      truffle: e.target.value,
                    })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ingredientQuantity.truffle}
                  onChange={(e) =>
                    setIngredientQuantity({
                      ...ingredientQuantity,
                      truffle: e.target.value,
                    })
                  }
                />
              </td>
            </tr>
          </table>
        </div>
        <div className="production-record">
          <div
            className="production"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              flex: "1",
            }}
          >
            <table
              border="1"
              style={{
                float: "left",
                marginRight: "20px",
                width: "100%",
                backgroundColor:"lightgrey",
                marginTop:"50px"
              }}
            >
              <tr>
                <td colSpan="2">Clean down procedure followed</td>
                <td>
                  <input
                    type="text"
                    placeholder="Y/N"
                    value={cleanDown}
                    onChange={(e) => setCleanDown(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">Signed :</td>
                <td>
                  <input
                    type="text"
                    value={cleanDownSigned}
                    onChange={(e) => setCleanDownSigned(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">Time :</td>
                <td>
                  <input
                    type="text"
                    value={cleanDownTime}
                    onChange={(e) => setCleanDownTime(e.target.value)}
                  />
                </td>
              </tr>
            </table>
            <table border="1" style={{ width: "100%",
                backgroundColor:"lightgrey",
                marginTop:"50px"}}>
              <tr>
                <th style={{fontWeight:"600",fontSize:"30px",paddingVertical:"10px", color:"purple"}} colSpan="2">Production</th>
              </tr>
              <tr>
                <td>Time In Vat</td>
                <td>
                  <input
                    type="text"
                    value={timeInVat}
                    onChange={(e) => setTimeInVat(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time Calc. (vat off)</td>
                <td>
                  <input
                    type="text"
                    value={timeCalc}
                    onChange={(e) => setTimeCalc(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time/Temp at culture</td>
                <td>
                  <select
                    style={{ width: "93%", padding: 10, borderRadius: 5 }}
                    name="time calc"
                    id=""
                    value={timeCulture}
                    onChange={(e) => {
                      setTimeCulture(e.target.value);
                    }}
                  >
                    {temperatureArray.map((item, i) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Time/PH at rennet</td>
                <td>
                  <select
                    style={{
                      width: "93%",
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 7,
                    }}
                    name="time calc"
                    id=""
                    value={timeRennet}
                    onChange={(e) => {
                      setTimeRennet(e.target.value);
                    }}
                  >
                    {Array.from({ length: 71 }, (_, index) => index + 50).map(
                      (item, i) => {
                        return <option value={item}>{item} mins</option>;
                      }
                    )}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Time/PH at mould</td>
                <td>
                  <select
                    style={{
                      width: "93%",
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 7,
                    }}
                    name="time calc"
                    id=""
                    value={timeMould}
                    onChange={(e) => {
                      setTimeMould(e.target.value);
                    }}
                  >
                    {Array.from({ length: 121 }, (_, index) => index + 120).map(
                      (item, i) => {
                        return <option value={item}>{item} mins</option>;
                      }
                    )}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Time finished mould</td>
                <td>
                  <input
                    type="text"
                    value={timeMouldFinished}
                    onChange={(e) => setTimeMouldFinished(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time turn 1(+6)</td>
                <td>
                  <input
                    type="text"
                    value={timeTurn1}
                    onChange={(e) => setTimeTurn1(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time turn 2 (+18)</td>
                <td>
                  <input
                    type="text"
                    value={timeTurn2}
                    onChange={(e) => setTimeTurn2(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time / PH salting</td>
                <td>
                  <select
                    style={{
                      width: "93%",
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 7,
                    }}
                    name="time calc"
                    id=""
                    value={timeSalt}
                    onChange={(e) => {
                      setTimeSalt(e.target.value);
                    }}
                  >
                    {Array.from(
                      { length: 21 },
                      (_, index) => (520 - index * 5) / 100
                    ).map((item, i) => {
                      return (
                        <option value={item.toFixed(2)}>
                          {item.toFixed(2)} mins
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Second salting (+12)</td>
                <td>
                  <select
                    style={{
                      width: "93%",
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 7,
                    }}
                    name="time calc"
                    id=""
                    value={timeSalt2}
                    onChange={(e) => {
                      setTimeSalt2(e.target.value);
                    }}
                  >
                    {Array.from(
                      { length: 21 },
                      (_, index) => (520 - index * 5) / 100
                    ).map((item, i) => {
                      return (
                        <option value={item.toFixed(2)}>
                          {item.toFixed(2)} mins
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Time/Temp de-mould</td>
                <td>
                  <input
                    type="text"
                    value={timeDemould}
                    onChange={(e) => setTimeDemould(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time/date into boxes</td>
                <td>
                  <input
                    type="text"
                    value={timeBox}
                    onChange={(e) => setTimeBox(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Observations</td>
                <td>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={observation}
                    onChange={(e) => setObservation(e.target.value)}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
          <div
            className="record"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              flex: "1",
            }}
          >
            <table
              border="1"
              style={{
                float: "left",
                width: "100%",
                backgroundColor:"lightgrey",
                marginTop:"50px"
              }}
            >
              <tr>
                <th style={{fontWeight:"600",fontSize:"30px",paddingVertical:"10px",color:"purple"}} colSpan={3}>Temperature Record</th>
              </tr>
              {dayData.map((day) => (
                <tr>
                  <td>{day.day}</td>
                  <td>
                    <input
                      type="text"
                      value={tempRecords[day.key].am}
                      onChange={(e) =>
                        setTempRecords({
                          ...tempRecords,
                          [day.key]: {
                            ...tempRecords[day.key],
                            am: e.target.value,
                          },
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={tempRecords[day.key].pm}
                      onChange={(e) =>
                        setTempRecords({
                          ...tempRecords,
                          [day.key]: {
                            ...tempRecords[day.key],
                            pm: e.target.value,
                          },
                        })
                      }
                    />
                  </td>
                </tr>
              ))}

              <tr>
                <td>Date Wrapped</td>
                <td colSpan="2">
                  <textarea
                    name=""
                    id=""
                    cols="36"
                    rows="10"
                    value={dateWrapped}
                    onChange={(e) => setDateWrapped(e.target.value)}
                  ></textarea>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div>
          <div>
            <table
              // border="1"
              style={{
                flex: "1",
                width: "100%",
                backgroundColor:"lightgrey",
                marginTop:"50px"

              }}
            >
              <tr>
                <th style={{fontWeight:"600",fontSize:"30px",paddingVertical:"10px",color:"purple"}} colSpan="2">Final Yield</th>
              </tr>
              <tr>
                <td>Total Yield (Kgs)</td>
                <td>
                  <input
                    type="text"
                    value={totalYield}
                    onChange={(e) => setTotalYield(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>200g BBG</td>
                <td>
                  <input
                    type="text"
                    value={bbg}
                    onChange={(e) => setBbg(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>200g truffle BBG</td>
                <td>
                  <input
                    type="text"
                    value={truffleBbg}
                    onChange={(e) => setTruffleBbg(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Cutter BBG</td>
                <td>
                  <input
                    type="text"
                    value={cutterBbg}
                    onChange={(e) => setCutterBbg(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Cutter Truffle BBG</td>
                <td>
                  <input
                    type="text"
                    value={cutterTruffleBbg}
                    onChange={(e) => setCutterTruffleBbg(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Other</td>
                <td>
                  <input
                    type="text"
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                  />
                </td>
              </tr>
            </table>

            <table
              border="1"
              style={{
                flex: "1",
                width: "100%",
                backgroundColor:"lightgrey",

                marginTop: "30px",
              }}
            >
              <tr>
                <th style={{fontWeight:"600",fontSize:"30px",paddingVertical:"10px",color:"purple"}} colSpan="2">Disposal Details</th>
              </tr>
              {["one", "two", "three", "four", "five", "six"].map((num) => (
                <tr>
                  <td>
                    <input
                      type="text"
                      value={disposal[num].name}
                      onChange={(e) =>
                        setDisposal({
                          ...disposal,
                          [num]: { ...disposal[num], name: e.target.value },
                        })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={disposal[num].amount}
                      onChange={(e) =>
                        setDisposal({
                          ...disposal,
                          [num]: { ...disposal[num], amount: e.target.value },
                        })
                      }
                    />
                  </td>
                </tr>
              ))}
            </table>
            <table
              border="2"
              style={{
                backgroundColor:"lightgrey",
                flex: "1",
                width: "100%",
                marginTop: "50px",
              }}
            >
              <tr>
                <th style={{fontWeight:"600",fontSize:"30px",paddingVertical:"10px",color:"purple"}} colSpan="2">Compliance with HACCP/FSMS</th>
              </tr>
              <tr>
                <td>Signed</td>
                <td>
                  <input
                    type="text"
                    value={complianceSigned}
                    onChange={(e) => setComplianceSigned(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Time</td>
                <td>
                  <input
                    type="text"
                    value={complianceTime}
                    onChange={(e) => setComplianceTime(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>
                  <input
                    type="text"
                    value={complianceDate}
                    onChange={(e) => setComplianceDate(e.target.value)}
                  />
                </td>
              </tr>
            </table>
            <textarea
              width="100%"
              name=""
              placeholder="Observations"
              id=""
              cols="50"
              rows="10"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button className="button-blue" onClick={handleSubmit}>
          {recipe ? "Update Recipe" : "Add Recipe"}
        </button>
        {recipe && (
          <button
            className="button-red"
            style={{
              backgroundColor: "red",
            }}
            onClick={handleDelete}
          >
            Delete Recipe
          </button>
        )}
      </div>
    </div>
  );
}
