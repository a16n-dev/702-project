import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ParamsDictionary } from 'express-serve-static-core/index'
import { StatusCodes } from 'http-status-codes'
import getDatabase from '../db'

type getReflections = (
    req: Request<ParamsDictionary>,
    res: Response<Paths.GetReflections.Responses.$200>
) => void

type createReflection = (
    req: Request<ParamsDictionary, {}, Paths.CreateReflection.RequestBody>,
    res: Response<
        | Paths.CreateReflection.Responses.$201
        | Paths.CreateReflection.Responses.$400
    >
) => void

interface Reflection {
    answers: string[]
}

const getReflectionsHandler: getReflections = async (req, res) => {
    const db = await getDatabase()
    const reflections = (await db
        .collection('reflections')
        .find({})
        .toArray()) as unknown as Reflection[]
    console.log(reflections)

    return res.status(StatusCodes.OK).json({
        answers: reflections.map((r) => r.answers)
    })
}

export const getReflections = asyncHandler(getReflectionsHandler)

const createReflectionHandler: createReflection = async (req, res) => {
    const db = await getDatabase()
    await db.collection('reflections').insertOne({
        answers: req.body.answers,
        levelData: req.body.levelData
    })
    return res.status(StatusCodes.CREATED).end()
}

export const createReflection = asyncHandler(createReflectionHandler)
