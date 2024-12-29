const Joi = require('joi');

// Define the validation schema for job details
const jobDetailsSchema = Joi.object({
  jobTitle: Joi.string().required(),
  department: Joi.string().required(),
  employmentStatus: Joi.string().required(),
  employmentStartDate: Joi.date().iso(),
  contractDetails: Joi.string(),
});

// Define the validation schema for qualifications
const qualificationsSchema = Joi.object({
  educationalQualifications: Joi.array().items(Joi.string()),
  professionalCredentials: Joi.array().items(Joi.string()),
  yearsOfExperience: Joi.number().integer().min(0),
  specializations: Joi.array().items(Joi.string()),
});

// Define the validation schema for attendance records
const attendanceRecordSchema = Joi.object({
  clockIn: Joi.date().iso(),
  clockOut: Joi.date().iso(),
});

// Define the validation schema for work schedule
const workScheduleSchema = Joi.object({
  shifts: Joi.string(),
  hours: Joi.number().integer().min(0),
  attendanceRecords: Joi.array().items(attendanceRecordSchema),
  paidTimeOff: Joi.object({
    sickLeave: Joi.number().integer().min(0),
    vacation: Joi.number().integer().min(0),
    holidays: Joi.number().integer().min(0),
  }),
  overtimeHours: Joi.number().integer().min(0),
  compensatoryTime: Joi.number().integer().min(0),
});

// Define the validation schema for performance evaluations
const performanceEvaluationSchema = Joi.object({
  date: Joi.date().iso(),
  feedback: Joi.string(),
});

// Define the validation schema for performance
const performanceSchema = Joi.object({
  evaluations: Joi.array().items(performanceEvaluationSchema),
  goals: Joi.array().items(Joi.string()),
  trainingNeeds: Joi.array().items(Joi.string()),
  recognitionAndRewards: Joi.array().items(Joi.string()),
});

// Define the validation schema for certifications
const certificationSchema = Joi.object({
  name: Joi.string().required(),
  expirationDate: Joi.date().iso(),
});

// Define the validation schema for training
const trainingSchema = Joi.object({
  trainingHistory: Joi.array().items(Joi.string()),
  certifications: Joi.array().items(certificationSchema),
  continuingEducationRequirements: Joi.array().items(Joi.string()),
});

// Define the validation schema for salary history
const salaryHistorySchema = Joi.object({
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso(),
  salary: Joi.number().min(0),
});

// Define the validation schema for payroll
const payrollSchema = Joi.object({
  salaryOrHourlyRate: Joi.number().min(0),
  payrollSchedule: Joi.string(),
  deductionsAndWithholdings: Joi.array().items(Joi.string()),
  bonusesOrIncentives: Joi.array().items(Joi.string()),
  salaryHistory: Joi.array().items(salaryHistorySchema),
});

// Define the validation schema for leave requests
const leaveRequestSchema = Joi.object({
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso(),
  type: Joi.string(),
  status: Joi.string(),
});

// Define the validation schema for leave management
const leaveManagementSchema = Joi.object({
  leaveRequests: Joi.array().items(leaveRequestSchema),
  leaveTypes: Joi.array().items(Joi.string()),
  leaveBalances: Joi.object({
    sick: Joi.number().integer().min(0),
    vacation: Joi.number().integer().min(0),
    personal: Joi.number().integer().min(0),
  }),
  FMLATracking: Joi.boolean(),
});

// Define the validation schema for benefit enrollment details
const enrollmentDetailSchema = Joi.object({
  benefitName: Joi.string().required(),
  enrollmentDate: Joi.date().iso(),
});

// Define the validation schema for employee benefits
const employeeBenefitsSchema = Joi.object({
  enrollmentDetails: Joi.array().items(enrollmentDetailSchema),
  benefitOptions: Joi.array().items(Joi.string()),
  coverageDetails: Joi.array().items(Joi.object({
    benefitName: Joi.string().required(),
    coverage: Joi.string(),
  })),
  employeeContributions: Joi.array().items(Joi.object({
    benefitName: Joi.string().required(),
    amount: Joi.number().min(0),
  })),
  employerContributions: Joi.array().items(Joi.object({
    benefitName: Joi.string().required(),
    amount: Joi.number().min(0),
  })),
});

// Define the validation schema for exit interviews
const exitInterviewSchema = Joi.object({
  date: Joi.date().iso(),
  feedback: Joi.string(),
});

// Define the validation schema for onboarding and offboarding
const onboardingOffboardingSchema = Joi.object({
  onboardingProcess: Joi.string(),
  exitInterviews: Joi.array().items(exitInterviewSchema),
  offboardingProcedures: Joi.string(),
  equipmentAndAccess: Joi.array().items(Joi.string()),
});

// Define the validation schema for compliance and regulations
const complianceSchema = Joi.object({
  contractsAndAgreements: Joi.array().items(Joi.string()),
  workplacePoliciesAndProcedures: Joi.array().items(Joi.string()),
  laborLawsCompliance: Joi.array().items(Joi.string()),
  healthAndSafetyRecords: Joi.array().items(Joi.string()),
});

// Define the validation schema for employee data
const employeeSchema = Joi.object({
  fullName: Joi.string(),
  employeeId: Joi.string(),
  contactDetails: Joi.object({
    address: Joi.string(),
    phoneNumber: Joi.string(),
    email: Joi.string().email()
  }),
  dateOfBirth: Joi.date(),
  gender: Joi.string().valid('Male', 'Female', 'Other'),
  socialSecurityNumber: Joi.string(),
  jobDetails: jobDetailsSchema,
  qualifications: qualificationsSchema,
  workSchedule: workScheduleSchema,
  performance: performanceSchema,
  training: trainingSchema,
  payroll: payrollSchema,
  leaveManagement: leaveManagementSchema,
  employeeBenefits: employeeBenefitsSchema,
  onboardingOffboarding: onboardingOffboardingSchema,
  compliance: complianceSchema,
});

// Validate employee data
const validateEmployeeData = (req, res, next) => {
  const { error } = employeeSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  next();
};

module.exports = {
  validateEmployeeData,
};
