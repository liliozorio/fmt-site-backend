import { Router } from 'express'
import { ROICalculatorController } from '@/modules/Calculator/roi/ROIController'

const calculatorRoutes = Router()

const roiCalculatorController = new ROICalculatorController()

calculatorRoutes.get(
    '/roi',  
    roiCalculatorController.handle
)

export { calculatorRoutes }