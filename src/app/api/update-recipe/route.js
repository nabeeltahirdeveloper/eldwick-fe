import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


// update recipe by id

export async function POST(request) {
    const { 
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
      lastUpdated,
      id } = await request.json();
    const client = await clientPromise;
    const db = await client.db();

    const result = await db.collection("recipes").updateOne(
        { _id:new ObjectId(id) },
        {
            $set: {
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
      lastUpdated,
                lastUpdated: new Date().toISOString(),
            },
        }
    );

    return NextResponse.json(result);
}