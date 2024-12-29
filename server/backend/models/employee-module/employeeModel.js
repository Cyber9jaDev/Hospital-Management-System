const mongoose = require('mongoose');

// Job Details Schema
const jobDetailsSchema = new mongoose.Schema({
  jobTitle: String,
  department: String,
  employmentStatus: String,
  employmentStartDate: Date,
  contractDetails: String,
});

// Qualifications Schema
const qualificationsSchema = new mongoose.Schema({
  educationalQualifications: [String],
  professionalCredentials: [String],
  yearsOfExperience: Number,
  specializations: [String],
});

// Work Schedule Schema
const workScheduleSchema = new mongoose.Schema({
  shifts: String,
  hours: Number,
  attendanceRecords: [{
    clockIn: Date,
    clockOut: Date,
  }],
  paidTimeOff: {
    sickLeave: Number,
    vacation: Number,
    holidays: Number,
  },
  overtimeHours: Number,
  compensatoryTime: Number,
});

// Performance Schema
const performanceSchema = new mongoose.Schema({
  evaluations: [{
    date: Date,
    feedback: String,
  }],
  goals: [String],
  trainingNeeds: [String],
  recognitionAndRewards: [String],
});

// Training Schema
const trainingSchema = new mongoose.Schema({
  trainingHistory: [String],
  certifications: [{
    name: String,
    expirationDate: Date,
  }],
  continuingEducationRequirements: [String],
});

// Payroll Schema
const payrollSchema = new mongoose.Schema({
  salaryOrHourlyRate: Number,
  payrollSchedule: String,
  deductionsAndWithholdings: [String],
  bonusesOrIncentives: [String],
  salaryHistory: [{
    startDate: Date,
    endDate: Date,
    salary: Number,
  }],
});

// Leave Management Schema
const leaveManagementSchema = new mongoose.Schema({
  leaveRequests: [{
    startDate: Date,
    endDate: Date,
    type: String,
    status: String,
  }],
  leaveTypes: [String],
  leaveBalances: {
    sick: Number,
    vacation: Number,
    personal: Number,
  },
  FMLATracking: Boolean,
});

// Employee Benefits Schema
const employeeBenefitsSchema = new mongoose.Schema({
  enrollmentDetails: [{
    benefitName: String,
    enrollmentDate: Date,
  }],
  benefitOptions: [String],
  coverageDetails: [{
    benefitName: String,
    coverage: String,
  }],
  employeeContributions: [{
    benefitName: String,
    amount: Number,
  }],
  employerContributions: [{
    benefitName: String,
    amount: Number,
  }],
});

// Onboarding and Offboarding Schema
const onboardingOffboardingSchema = new mongoose.Schema({
  onboardingProcess: String,
  exitInterviews: [{
    date: Date,
    feedback: String,
  }],
  offboardingProcedures: String,
  equipmentAndAccess: [String],
});

// Compliance and Regulations Schema
const complianceSchema = new mongoose.Schema({
  contractsAndAgreements: [String],
  workplacePoliciesAndProcedures: [String],
  laborLawsCompliance: [String],
  healthAndSafetyRecords: [String],
});

// Employee Schema with embedded sub-documents
const employeeSchema = new mongoose.Schema({

  fullName: { 
    type: String, 
    required: true 
    },
  employeeId: { 
    type: String, 
    unique: true, 
    required: true 
    },
  contactDetails: {
    address: String,
    phoneNumber: String,
    email: { 
        type: String, 
        required: true 
        },
  },
  dateOfBirth: Date,
  gender: String,
  socialSecurityNumber: String,

  // Embedded sub-documents
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

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
