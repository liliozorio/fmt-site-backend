import 'reflect-metadata'
import 'dotenv/config'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import * as Sentry from '@sentry/node'
import * as Tracing from '@sentry/tracing'

import { AppError } from '@/shared/errors/AppError'

import { router } from '@/shared/infra/http/routes'

import '@/shared/container'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization')
	next()
})
app.use(cors())
app.use(router)

app.use(
	(
		error: Error,
		request: Request,
		response: Response,
		_: NextFunction,
	) => {
		if (error instanceof AppError) {
			return response.status(error.statusCode).json({
				message: error.message,
			})
		}

		return response.status(500).json({
			status: 'error',
			message: `Internal server error - ${error.message}`,
		})
	},
)

export { app }
