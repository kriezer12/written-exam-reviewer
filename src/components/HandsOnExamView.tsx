import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Database,
  Code2,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  Link,
  Key,
  Eye,
  EyeOff,
  Send,
  RotateCcw,
  Award,
  Sparkles,
  Table,
  ArrowRight,
  GripVertical,
  Star,
} from 'lucide-react';

/* ─────────────────── Types ─────────────────── */

interface ERDEntity {
  id: string;
  name: string;
  attributes: ERDAttribute[];
  x: number;
  y: number;
}

interface ERDAttribute {
  id: string;
  name: string;
  isPrimaryKey: boolean;
  type: string;
}

interface ERDRelationship {
  id: string;
  fromEntityId: string;
  toEntityId: string;
  cardinality: '1:1' | '1:M' | 'M:N';
  label: string;
}

interface NormTable {
  name: string;
  columns: string[];
}

type HandsOnTab = 'info-management' | 'oop';
type NormStep = 'unnormalized' | '1nf' | '2nf' | '3nf';

/* ─────── Normalization Data ─────── */

const UNNORMALIZED_DATA = {
  tableName: 'StudentCourseRegistration',
  columns: [
    'StudentID', 'StudentName', 'StudentAddress', 'CourseID', 'CourseName',
    'InstructorID', 'InstructorName', 'InstructorDept', 'Grade', 'Semester',
  ],
  rows: [
    ['S001', 'Juan Dela Cruz', '123 Rizal St, Manila', 'CS101', 'Data Structures', 'I01', 'Dr. Santos', 'Computer Science', 'A', '1st Sem 2024'],
    ['S001', 'Juan Dela Cruz', '123 Rizal St, Manila', 'CS102', 'Algorithms', 'I02', 'Dr. Reyes', 'Computer Science', 'B+', '1st Sem 2024'],
    ['S002', 'Maria Garcia', '456 Bonifacio Ave, Quezon City', 'CS101', 'Data Structures', 'I01', 'Dr. Santos', 'Computer Science', 'A-', '1st Sem 2024'],
    ['S002', 'Maria Garcia', '456 Bonifacio Ave, Quezon City', 'IT201', 'Database Systems', 'I03', 'Prof. Cruz', 'Information Technology', 'B', '1st Sem 2024'],
    ['S003', 'Jose Rizal Jr.', '789 Mabini Blvd, Pasig', 'CS102', 'Algorithms', 'I02', 'Dr. Reyes', 'Computer Science', 'A', '2nd Sem 2024'],
  ],
};

const EXPECTED_1NF: NormTable[] = [
  {
    name: 'StudentCourseRegistration',
    columns: ['StudentID', 'StudentName', 'StudentAddress', 'CourseID', 'CourseName', 'InstructorID', 'InstructorName', 'InstructorDept', 'Grade', 'Semester'],
  },
];

const EXPECTED_2NF: NormTable[] = [
  { name: 'Student', columns: ['StudentID', 'StudentName', 'StudentAddress'] },
  { name: 'Course', columns: ['CourseID', 'CourseName', 'InstructorID', 'InstructorName', 'InstructorDept'] },
  { name: 'Registration', columns: ['StudentID', 'CourseID', 'Grade', 'Semester'] },
];

const EXPECTED_3NF: NormTable[] = [
  { name: 'Student', columns: ['StudentID', 'StudentName', 'StudentAddress'] },
  { name: 'Course', columns: ['CourseID', 'CourseName', 'InstructorID'] },
  { name: 'Instructor', columns: ['InstructorID', 'InstructorName', 'InstructorDept'] },
  { name: 'Registration', columns: ['StudentID', 'CourseID', 'Grade', 'Semester'] },
];

const JAVA_PROBLEM = {
  title: 'San Mateo Jeepney Fare System',
  description: `COMP 009 Object Oriented Programming — Practice Scenario
SET C: San Mateo Jeepney Fare System

General Instructions:
• Main Program Name: JeepneyFareSystem.java

Inputs Required:
1. Passenger Name
2. Route (e.g., "San Mateo to Cubao")
3. Distance in Kilometers (km)
4. Passenger Type ("Regular", "Student", or "Senior")
5. Payment Amount

Formulas & Business Logic:
• The base fare for the first 4 kilometers is exactly PHP 13.00.
• For every kilometer after the first 4km, add PHP 1.50 per kilometer.
• Distance Logic:
   - If distance ≤ 4km: Base Fare = 13.00, Extra Distance Charge = 0
   - If distance > 4km: Base Fare = 13.00, Extra Distance Charge = (Distance - 4) × 1.50
• Total Fare = Base Fare + Extra Distance Charge
• Discount Logic:
   - If Passenger Type is "Student" OR "Senior": Apply a 20% discount to the Total Fare.
   - If Passenger Type is "Regular": No discount.
• Final Fare = Total Fare - Discount
• Change = Payment Amount - Final Fare

Conditions (Validation):
• If Distance is zero or negative: Status = "Invalid Distance", Change = 0
• If Payment Amount is negative: Status = "Invalid Payment", Change = 0
• If Payment < Final Fare: Status = "Insufficient Payment", Change = 0
• If valid and payment is sufficient: Status = "Payment Successful"

Class Requirement:
Create a class named \`JeepneyFare\` with methods for:
1. Computing the Total Fare (base fare + extra distance)
2. Computing the Discount
3. Computing the Final Fare
4. Computing Change and Status
5. Displaying the Ticket (Receipt)

Additional Requirements:
• Use \`.toUpperCase()\` on the Passenger Name and Passenger Type.
• Handle invalid numeric input using Scanner and try/catch.

Output (The Ticket):
Display: Passenger Name, Route, Passenger Type, Distance (km), Total Fare, Discount, Final Fare, Payment Amount, Change, Status.`,
  starterCode: `import java.util.Scanner;

// TODO: Create the JeepneyFare class
class JeepneyFare {
    // Private fields
    private String passengerName;
    private String route;
    private double distance;
    private String passengerType;
    private double paymentAmount;

    // TODO: Create a constructor that accepts all fields

    // TODO: Compute Total Fare
    // Base fare = 13.00 for first 4km
    // Extra = (distance - 4) * 1.50 if distance > 4
    public double computeTotalFare() {
        // Implement this method
        return 0;
    }

    // TODO: Compute Discount
    // 20% off for "Student" or "Senior"
    public double computeDiscount() {
        // Implement this method
        return 0;
    }

    // TODO: Compute Final Fare
    public double computeFinalFare() {
        // Implement this method
        return 0;
    }

    // TODO: Compute Change and determine Status
    // Return the status string
    public String computeStatus() {
        // Implement validation and status logic
        return "";
    }

    public double computeChange() {
        // Implement this method
        return 0;
    }

    // TODO: Display the Ticket
    public void displayTicket() {
        // Print all receipt details
    }
}

public class JeepneyFareSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            // TODO: Get user inputs
            // 1. Passenger Name
            // 2. Route
            // 3. Distance in km
            // 4. Passenger Type
            // 5. Payment Amount

            // TODO: Create JeepneyFare object

            // TODO: Call displayTicket()

        } catch (Exception e) {
            System.out.println("Invalid input! Please enter valid data.");
        }

        scanner.close();
    }
}`,
  modelAnswer: `import java.util.Scanner;

class JeepneyFare {
    private String passengerName;
    private String route;
    private double distance;
    private String passengerType;
    private double paymentAmount;

    // Constructor
    public JeepneyFare(String passengerName, String route,
                        double distance, String passengerType,
                        double paymentAmount) {
        this.passengerName = passengerName.toUpperCase();
        this.route = route;
        this.distance = distance;
        this.passengerType = passengerType.toUpperCase();
        this.paymentAmount = paymentAmount;
    }

    // Getters
    public String getPassengerName() { return passengerName; }
    public String getRoute() { return route; }
    public double getDistance() { return distance; }
    public String getPassengerType() { return passengerType; }
    public double getPaymentAmount() { return paymentAmount; }

    // Setters
    public void setPassengerName(String name) {
        this.passengerName = name.toUpperCase();
    }
    public void setRoute(String route) { this.route = route; }
    public void setDistance(double distance) {
        this.distance = distance;
    }
    public void setPassengerType(String type) {
        this.passengerType = type.toUpperCase();
    }
    public void setPaymentAmount(double amount) {
        this.paymentAmount = amount;
    }

    // Compute Total Fare
    public double computeTotalFare() {
        double baseFare = 13.00;
        double extraCharge = 0;
        if (distance > 4) {
            extraCharge = (distance - 4) * 1.50;
        }
        return baseFare + extraCharge;
    }

    // Compute Discount (20% for Student or Senior)
    public double computeDiscount() {
        double totalFare = computeTotalFare();
        if (passengerType.equals("STUDENT")
            || passengerType.equals("SENIOR")) {
            return totalFare * 0.20;
        }
        return 0;
    }

    // Compute Final Fare
    public double computeFinalFare() {
        return computeTotalFare() - computeDiscount();
    }

    // Compute Status
    public String computeStatus() {
        if (distance <= 0) {
            return "Invalid Distance";
        }
        if (paymentAmount < 0) {
            return "Invalid Payment";
        }
        if (paymentAmount < computeFinalFare()) {
            return "Insufficient Payment";
        }
        return "Payment Successful";
    }

    // Compute Change
    public double computeChange() {
        String status = computeStatus();
        if (status.equals("Payment Successful")) {
            return paymentAmount - computeFinalFare();
        }
        return 0;
    }

    // Display Ticket
    public void displayTicket() {
        System.out.println("==============================");
        System.out.println("   JEEPNEY FARE RECEIPT");
        System.out.println("==============================");
        System.out.println("Passenger  : " + passengerName);
        System.out.println("Route      : " + route);
        System.out.println("Type       : " + passengerType);
        System.out.printf("Distance   : %.2f km%n", distance);
        System.out.printf("Total Fare : PHP %.2f%n",
            computeTotalFare());
        System.out.printf("Discount   : PHP %.2f%n",
            computeDiscount());
        System.out.printf("Final Fare : PHP %.2f%n",
            computeFinalFare());
        System.out.printf("Payment    : PHP %.2f%n",
            paymentAmount);
        System.out.printf("Change     : PHP %.2f%n",
            computeChange());
        System.out.println("Status     : " + computeStatus());
        System.out.println("==============================");
    }
}

public class JeepneyFareSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter Passenger Name: ");
            String name = scanner.nextLine();

            System.out.print("Enter Route: ");
            String route = scanner.nextLine();

            System.out.print("Enter Distance (km): ");
            double distance = scanner.nextDouble();

            scanner.nextLine(); // consume newline
            System.out.print("Enter Passenger Type: ");
            String type = scanner.nextLine();

            System.out.print("Enter Payment Amount: ");
            double payment = scanner.nextDouble();

            JeepneyFare fare = new JeepneyFare(
                name, route, distance, type, payment
            );

            System.out.println();
            fare.displayTicket();

        } catch (Exception e) {
            System.out.println(
                "Invalid input! Please enter valid data."
            );
        }

        scanner.close();
    }
}`,
};

const OOP_CHECKLIST = [
  { id: 'class_decl', label: 'Class declaration (class JeepneyFare)', pattern: /\bclass\s+JeepneyFare\b/ },
  { id: 'private_fields', label: 'Encapsulation (private fields)', pattern: /\bprivate\s+(String|double|int)\s+\w+/ },
  { id: 'constructor', label: 'Constructor (this. assignments)', pattern: /\bthis\.\w+\s*=/ },
  { id: 'getter', label: 'Getter methods (getXxx pattern)', pattern: /\bget[A-Z]\w*\s*\(/ },
  { id: 'setter', label: 'Setter methods (setXxx pattern)', pattern: /\bset[A-Z]\w*\s*\(/ },
  { id: 'compute_fare', label: 'Fare computation method', pattern: /\bcomputeTotalFare\s*\(/ },
  { id: 'compute_discount', label: 'Discount computation method', pattern: /\bcomputeDiscount\s*\(/ },
  { id: 'compute_final', label: 'Final fare computation method', pattern: /\bcomputeFinalFare\s*\(/ },
  { id: 'display_ticket', label: 'Display ticket method', pattern: /\bdisplayTicket\s*\(/ },
  { id: 'to_upper', label: 'String .toUpperCase() usage', pattern: /\.toUpperCase\s*\(/ },
  { id: 'try_catch', label: 'Exception handling (try/catch)', pattern: /\btry\s*\{[\s\S]*\bcatch\b/ },
  { id: 'scanner', label: 'Scanner for input', pattern: /\bnew\s+Scanner\b/ },
  { id: 'main_method', label: 'Main method', pattern: /public\s+static\s+void\s+main/ },
  { id: 'validation', label: 'Input validation (status logic)', pattern: /\b(Invalid|Insufficient|Successful)\b/ },
];

/* ─────── Component ─────── */

export const HandsOnExamView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HandsOnTab>('info-management');

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }} className="animate-fade-in">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '16px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(245, 158, 11, 0.3)',
          }}>
            <Sparkles size={28} color="#fff" />
          </div>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 8px', background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Part II: Hands-on Exam
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          Interactive laboratory activities — demonstrate your skills through practical exercises.
        </p>
      </div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
        <button
          onClick={() => setActiveTab('info-management')}
          className={`btn ${activeTab === 'info-management' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '14px 28px', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
        >
          <Database size={20} />
          <span>Information Management</span>
        </button>
        <button
          onClick={() => setActiveTab('oop')}
          className={`btn ${activeTab === 'oop' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '14px 28px', fontSize: '1rem', borderRadius: 'var(--radius-md)' }}
        >
          <Code2 size={20} />
          <span>Object-Oriented Programming</span>
        </button>
      </div>

      {/* Content */}
      <div className="animate-fade-in" key={activeTab}>
        {activeTab === 'info-management' ? <InfoManagementSection /> : <OOPSection />}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   SECTION 1: INFORMATION MANAGEMENT
   ═══════════════════════════════════════════════════════════════ */

type InfoSubTab = 'normalization' | 'erd';

const InfoManagementSection: React.FC = () => {
  const [subTab, setSubTab] = useState<InfoSubTab>('normalization');

  return (
    <div>
      {/* Sub-tab Switcher */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <button
          onClick={() => setSubTab('normalization')}
          className={`btn btn-sm ${subTab === 'normalization' ? '' : 'btn-ghost'}`}
          style={subTab === 'normalization' ? {
            background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b',
            border: '1px solid rgba(245, 158, 11, 0.4)',
          } : {}}
        >
          <Table size={16} />
          <span>Database Normalization</span>
        </button>
        <button
          onClick={() => setSubTab('erd')}
          className={`btn btn-sm ${subTab === 'erd' ? '' : 'btn-ghost'}`}
          style={subTab === 'erd' ? {
            background: 'rgba(16, 185, 129, 0.15)', color: '#10b981',
            border: '1px solid rgba(16, 185, 129, 0.4)',
          } : {}}
        >
          <Link size={16} />
          <span>ER Diagram Builder</span>
        </button>
      </div>

      <div className="animate-fade-in" key={subTab}>
        {subTab === 'normalization' ? <NormalizationActivity /> : <ERDBuilderActivity />}
      </div>
    </div>
  );
};

/* ─────── NORMALIZATION ACTIVITY ─────── */

const NormalizationActivity: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<NormStep>('unnormalized');
  const [userTables, setUserTables] = useState<Record<string, NormTable[]>>({
    '1nf': [{ name: '', columns: [] }],
    '2nf': [{ name: '', columns: [] }, { name: '', columns: [] }, { name: '', columns: [] }],
    '3nf': [{ name: '', columns: [] }, { name: '', columns: [] }, { name: '', columns: [] }, { name: '', columns: [] }],
  });
  const [validations, setValidations] = useState<Record<string, boolean | null>>({
    '1nf': null, '2nf': null, '3nf': null,
  });
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const steps: { key: NormStep; label: string; color: string }[] = [
    { key: 'unnormalized', label: 'Unnormalized Table', color: '#ef4444' },
    { key: '1nf', label: '1NF', color: '#f59e0b' },
    { key: '2nf', label: '2NF', color: '#3b82f6' },
    { key: '3nf', label: '3NF', color: '#10b981' },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);

  const updateTableName = (step: string, tableIdx: number, name: string) => {
    setUserTables(prev => {
      const updated = { ...prev };
      updated[step] = [...updated[step]];
      updated[step][tableIdx] = { ...updated[step][tableIdx], name };
      return updated;
    });
  };

  const toggleColumn = (step: string, tableIdx: number, col: string) => {
    setUserTables(prev => {
      const updated = { ...prev };
      updated[step] = [...updated[step]];
      const table = { ...updated[step][tableIdx] };
      if (table.columns.includes(col)) {
        table.columns = table.columns.filter(c => c !== col);
      } else {
        table.columns = [...table.columns, col];
      }
      updated[step][tableIdx] = table;
      return updated;
    });
  };

  const addTable = (step: string) => {
    setUserTables(prev => {
      const updated = { ...prev };
      updated[step] = [...updated[step], { name: '', columns: [] }];
      return updated;
    });
  };

  const removeTable = (step: string, idx: number) => {
    setUserTables(prev => {
      const updated = { ...prev };
      updated[step] = updated[step].filter((_, i) => i !== idx);
      return updated;
    });
  };

  const validateStep = (step: string) => {
    let expected: NormTable[];
    if (step === '1nf') expected = EXPECTED_1NF;
    else if (step === '2nf') expected = EXPECTED_2NF;
    else expected = EXPECTED_3NF;

    const user = userTables[step].filter(t => t.name.trim() !== '' || t.columns.length > 0);

    if (user.length !== expected.length) {
      setValidations(prev => ({ ...prev, [step]: false }));
      return false;
    }

    // Check each expected table has a matching user table
    const matched = expected.every(expTable => {
      return user.some(uTable => {
        const nameMatch = uTable.name.trim().toLowerCase().replace(/[\s_]/g, '') ===
          expTable.name.toLowerCase().replace(/[\s_]/g, '');
        const colsMatch = expTable.columns.length === uTable.columns.length &&
          expTable.columns.every(c => uTable.columns.includes(c));
        return nameMatch && colsMatch;
      });
    });

    setValidations(prev => ({ ...prev, [step]: matched }));
    return matched;
  };

  const hintContent = (step: string) => {
    if (step === '1nf') return (
      <div>
        <p style={{ marginBottom: '10px' }}>
          <strong>📘 Answer Key — 1NF:</strong> The given table already has atomic values (no multi-valued or repeating group columns). It already satisfies 1NF as-is!
        </p>
        <p style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>You need <strong>1 table</strong>. Keep everything in one table with a composite primary key of (StudentID, CourseID):</p>
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
          <div>📋 <strong style={{ color: '#818cf8' }}>Table Name:</strong> <span style={{ color: '#34d399' }}>StudentCourseRegistration</span></div>
          <div style={{ marginTop: '6px' }}>📦 <strong style={{ color: '#818cf8' }}>Columns:</strong></div>
          <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>
            StudentID, StudentName, StudentAddress, CourseID, CourseName, InstructorID, InstructorName, InstructorDept, Grade, Semester
          </div>
          <div style={{ marginTop: '6px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            (All 10 columns — select every column for this single table)
          </div>
        </div>
      </div>
    );
    if (step === '2nf') return (
      <div>
        <p style={{ marginBottom: '10px' }}>
          <strong>📘 Answer Key — 2NF:</strong> Remove partial dependencies. Attributes that depend on only part of the composite key (StudentID, CourseID) must be moved to their own tables.
        </p>
        <p style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>You need <strong>3 tables</strong>:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 1:</strong> <span style={{ color: '#34d399' }}>Student</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>StudentID, StudentName, StudentAddress</div>
            <div style={{ paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>↳ These depend only on StudentID</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 2:</strong> <span style={{ color: '#34d399' }}>Course</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>CourseID, CourseName, InstructorID, InstructorName, InstructorDept</div>
            <div style={{ paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>↳ These depend only on CourseID</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 3:</strong> <span style={{ color: '#34d399' }}>Registration</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>StudentID, CourseID, Grade, Semester</div>
            <div style={{ paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>↳ These depend on the full composite key (StudentID + CourseID)</div>
          </div>
        </div>
      </div>
    );
    return (
      <div>
        <p style={{ marginBottom: '10px' }}>
          <strong>📘 Answer Key — 3NF:</strong> Remove transitive dependencies. InstructorName and InstructorDept depend on InstructorID (not directly on CourseID), so they must be extracted into a separate Instructor table.
        </p>
        <p style={{ marginBottom: '8px', color: 'var(--text-secondary)' }}>You need <strong>4 tables</strong>:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 1:</strong> <span style={{ color: '#34d399' }}>Student</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>StudentID, StudentName, StudentAddress</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 2:</strong> <span style={{ color: '#34d399' }}>Course</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>CourseID, CourseName, InstructorID</div>
            <div style={{ paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>↳ InstructorID kept as foreign key only</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 3:</strong> <span style={{ color: '#34d399' }}>Instructor</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>InstructorID, InstructorName, InstructorDept</div>
            <div style={{ paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>↳ Extracted from Course to remove transitive dependency</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px 16px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            <div>📋 <strong style={{ color: '#818cf8' }}>Table 4:</strong> <span style={{ color: '#34d399' }}>Registration</span></div>
            <div style={{ paddingLeft: '16px', color: '#fbbf24' }}>StudentID, CourseID, Grade, Semester</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Step Progress */}
      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap' }}>
          {steps.map((step, idx) => (
            <React.Fragment key={step.key}>
              <button
                onClick={() => setCurrentStep(step.key)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: 'var(--radius-sm)',
                  border: currentStep === step.key ? `2px solid ${step.color}` : '2px solid transparent',
                  background: currentStep === step.key ? `${step.color}20` : 'transparent',
                  color: currentStep === step.key ? step.color : 'var(--text-secondary)',
                  cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {validations[step.key] === true && <CheckCircle2 size={16} color="#10b981" />}
                {validations[step.key] === false && <XCircle size={16} color="#ef4444" />}
                {step.label}
              </button>
              {idx < steps.length - 1 && (
                <ArrowRight size={20} style={{ color: 'var(--text-muted)', margin: '0 4px', flexShrink: 0 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Unnormalized Table Display */}
      {currentStep === 'unnormalized' && (
        <div className="glass-panel animate-fade-in" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span className="badge badge-danger" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>Unnormalized</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{UNNORMALIZED_DATA.tableName}</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.6 }}>
            Examine this unnormalized table. Notice the <strong>redundant data</strong> — student names and addresses repeat, instructor info repeats per course.
            Your task is to normalize this table step by step through <strong>1NF → 2NF → 3NF</strong>.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table className="hands-on-table">
              <thead>
                <tr>
                  {UNNORMALIZED_DATA.columns.map(col => (
                    <th key={col}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {UNNORMALIZED_DATA.rows.map((row, idx) => (
                  <tr key={idx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              className="btn btn-primary"
              onClick={() => setCurrentStep('1nf')}
            >
              <span>Begin Normalization</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Normalization Step Form */}
      {currentStep !== 'unnormalized' && (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Instructions */}
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: steps[currentStepIndex].color }}>
              {currentStep === '1nf' && '1st Normal Form (1NF) — Eliminate Repeating Groups'}
              {currentStep === '2nf' && '2nd Normal Form (2NF) — Remove Partial Dependencies'}
              {currentStep === '3nf' && '3rd Normal Form (3NF) — Remove Transitive Dependencies'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              {currentStep === '1nf' && 'Ensure the table has only atomic values — no multi-valued or repeating group attributes. Define table name and select the columns that belong.'}
              {currentStep === '2nf' && 'Remove partial dependencies by separating attributes that depend on only part of a composite key into their own tables. Create separate tables for each entity.'}
              {currentStep === '3nf' && 'Remove transitive dependencies — if a non-key attribute depends on another non-key attribute, extract it into a separate table.'}
            </p>

            {/* Hint Toggle */}
            <button
              onClick={() => setShowHints(prev => ({ ...prev, [currentStep]: !prev[currentStep] }))}
              className="btn btn-ghost btn-sm"
              style={{ marginTop: '12px' }}
            >
              {showHints[currentStep] ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{showHints[currentStep] ? 'Hide Answer Key' : 'Show Answer Key'}</span>
            </button>

            {showHints[currentStep] && (
              <div style={{
                marginTop: '12px', padding: '16px', borderRadius: 'var(--radius-sm)',
                background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.3)',
                fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--text-primary)',
              }}>
                {hintContent(currentStep)}
              </div>
            )}
          </div>

          {/* Available Columns Pool */}
          <div className="glass-panel" style={{ padding: '16px' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Available Columns (click to assign to tables below)
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {UNNORMALIZED_DATA.columns.map(col => {
                const isUsed = userTables[currentStep].some(t => t.columns.includes(col));
                return (
                  <span
                    key={col}
                    className="badge"
                    style={{
                      padding: '6px 12px', fontSize: '0.82rem', cursor: 'default',
                      background: isUsed ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255,255,255,0.06)',
                      color: isUsed ? '#818cf8' : 'var(--text-secondary)',
                      border: isUsed ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid var(--border-color)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {isUsed && <CheckCircle2 size={12} />}
                    {col}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Table Builders */}
          {userTables[currentStep].map((table, tableIdx) => (
            <div
              key={tableIdx}
              className="glass-panel glass-panel-interactive"
              style={{
                padding: '20px',
                border: validations[currentStep] === true ? '1px solid rgba(16, 185, 129, 0.4)' :
                  validations[currentStep] === false ? '1px solid rgba(239, 68, 68, 0.4)' :
                  '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
                  <Database size={18} color={steps[currentStepIndex].color} />
                  <input
                    type="text"
                    value={table.name}
                    onChange={(e) => updateTableName(currentStep, tableIdx, e.target.value)}
                    placeholder={`Table ${tableIdx + 1} name...`}
                    style={{
                      background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)', padding: '8px 14px',
                      color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 600,
                      outline: 'none', flex: 1, maxWidth: '300px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                </div>
                {userTables[currentStep].length > 1 && (
                  <button
                    onClick={() => removeTable(currentStep, tableIdx)}
                    className="btn btn-ghost btn-sm"
                    style={{ color: 'var(--color-danger)' }}
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              {/* Column Selector */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {UNNORMALIZED_DATA.columns.map(col => {
                  const isSelected = table.columns.includes(col);
                  return (
                    <button
                      key={col}
                      onClick={() => toggleColumn(currentStep, tableIdx, col)}
                      style={{
                        padding: '8px 14px', borderRadius: 'var(--radius-sm)',
                        border: isSelected ? `2px solid ${steps[currentStepIndex].color}` : '1px solid var(--border-color)',
                        background: isSelected ? `${steps[currentStepIndex].color}20` : 'var(--bg-secondary)',
                        color: isSelected ? steps[currentStepIndex].color : 'var(--text-secondary)',
                        cursor: 'pointer', fontSize: '0.85rem', fontWeight: isSelected ? 700 : 400,
                        fontFamily: 'var(--font-mono)', transition: 'all 0.15s ease',
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}
                    >
                      {isSelected ? <CheckCircle2 size={14} /> : <Plus size={14} />}
                      {col}
                    </button>
                  );
                })}
              </div>

              {/* Selected columns preview */}
              {table.columns.length > 0 && (
                <div style={{ marginTop: '12px', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'rgba(99, 102, 241, 0.06)', border: '1px solid rgba(99, 102, 241, 0.15)' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Schema Preview: </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    {table.name || '___'}(<span style={{ color: '#818cf8' }}>{table.columns.join(', ')}</span>)
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* Add Table / Validate Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <button onClick={() => addTable(currentStep)} className="btn btn-secondary">
              <Plus size={18} />
              <span>Add Another Table</span>
            </button>

            <div style={{ display: 'flex', gap: '12px' }}>
              {currentStepIndex > 1 && (
                <button onClick={() => setCurrentStep(steps[currentStepIndex - 1].key)} className="btn btn-secondary">
                  <ChevronLeft size={18} />
                  <span>Previous Step</span>
                </button>
              )}
              <button
                onClick={() => {
                  const valid = validateStep(currentStep);
                  if (valid && currentStepIndex < steps.length - 1) {
                    setTimeout(() => setCurrentStep(steps[currentStepIndex + 1].key), 600);
                  }
                }}
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#fff', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                }}
              >
                <CheckCircle2 size={18} />
                <span>Validate {currentStep.toUpperCase()}</span>
              </button>
            </div>
          </div>

          {/* Validation Feedback */}
          {validations[currentStep] !== null && (
            <div
              className="animate-fade-in"
              style={{
                padding: '16px 20px', borderRadius: 'var(--radius-sm)',
                background: validations[currentStep] ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${validations[currentStep] ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
                display: 'flex', alignItems: 'center', gap: '12px',
              }}
            >
              {validations[currentStep] ? (
                <>
                  <CheckCircle2 size={24} color="#10b981" />
                  <div>
                    <strong style={{ color: '#10b981' }}>Correct!</strong>
                    <span style={{ color: 'var(--text-secondary)', marginLeft: '8px' }}>
                      Your {currentStep.toUpperCase()} decomposition is valid.
                      {currentStepIndex < steps.length - 1 ? ' Moving to next step...' : ' 🎉 You have completed normalization!'}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <XCircle size={24} color="#ef4444" />
                  <div>
                    <strong style={{ color: '#ef4444' }}>Not quite right.</strong>
                    <span style={{ color: 'var(--text-secondary)', marginLeft: '8px' }}>
                      Check your table names, column assignments, and number of tables. Use the hint if you're stuck!
                    </span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/* ─────── ERD BUILDER ACTIVITY ─────── */

const ERDBuilderActivity: React.FC = () => {
  const [entities, setEntities] = useState<ERDEntity[]>([]);
  const [relationships, setRelationships] = useState<ERDRelationship[]>([]);
  const [newEntityName, setNewEntityName] = useState('');
  const [selectedFromEntity, setSelectedFromEntity] = useState('');
  const [selectedToEntity, setSelectedToEntity] = useState('');
  const [selectedCardinality, setSelectedCardinality] = useState<'1:1' | '1:M' | 'M:N'>('1:M');
  const [relationshipLabel, setRelationshipLabel] = useState('');
  const [showERDValidation, setShowERDValidation] = useState(false);
  const [erdScore, setErdScore] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const [dragState, setDragState] = useState<{ entityId: string; offsetX: number; offsetY: number } | null>(null);

  // Predefined positions for new entities in a grid-like layout
  const getDefaultPosition = (index: number) => {
    const cols = 3;
    const col = index % cols;
    const row = Math.floor(index / cols);
    return { x: 60 + col * 280, y: 60 + row * 220 };
  };

  const addEntity = () => {
    if (!newEntityName.trim()) return;
    const pos = getDefaultPosition(entities.length);
    const entity: ERDEntity = {
      id: `entity_${Date.now()}`,
      name: newEntityName.trim(),
      attributes: [],
      x: pos.x,
      y: pos.y,
    };
    setEntities(prev => [...prev, entity]);
    setNewEntityName('');
  };

  const removeEntity = (id: string) => {
    setEntities(prev => prev.filter(e => e.id !== id));
    setRelationships(prev => prev.filter(r => r.fromEntityId !== id && r.toEntityId !== id));
  };

  const addAttribute = (entityId: string, attrName: string, type: string) => {
    setEntities(prev => prev.map(e => {
      if (e.id !== entityId) return e;
      return {
        ...e,
        attributes: [...e.attributes, {
          id: `attr_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
          name: attrName,
          isPrimaryKey: false,
          type,
        }],
      };
    }));
  };

  const removeAttribute = (entityId: string, attrId: string) => {
    setEntities(prev => prev.map(e => {
      if (e.id !== entityId) return e;
      return { ...e, attributes: e.attributes.filter(a => a.id !== attrId) };
    }));
  };

  const togglePrimaryKey = (entityId: string, attrId: string) => {
    setEntities(prev => prev.map(e => {
      if (e.id !== entityId) return e;
      return {
        ...e,
        attributes: e.attributes.map(a =>
          a.id === attrId ? { ...a, isPrimaryKey: !a.isPrimaryKey } : a
        ),
      };
    }));
  };

  const addRelationship = () => {
    if (!selectedFromEntity || !selectedToEntity || selectedFromEntity === selectedToEntity) return;
    const rel: ERDRelationship = {
      id: `rel_${Date.now()}`,
      fromEntityId: selectedFromEntity,
      toEntityId: selectedToEntity,
      cardinality: selectedCardinality,
      label: relationshipLabel.trim() || `${selectedCardinality}`,
    };
    setRelationships(prev => [...prev, rel]);
    setRelationshipLabel('');
  };

  const removeRelationship = (id: string) => {
    setRelationships(prev => prev.filter(r => r.id !== id));
  };

  const handleMouseDown = (entityId: string, e: React.MouseEvent) => {
    const entity = entities.find(en => en.id === entityId);
    if (!entity) return;
    setDragState({
      entityId,
      offsetX: e.clientX - entity.x,
      offsetY: e.clientY - entity.y,
    });
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragState || !canvasRef.current) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const newX = e.clientX - dragState.offsetX;
    const newY = e.clientY - dragState.offsetY;

    setEntities(prev => prev.map(entity =>
      entity.id === dragState.entityId
        ? { ...entity, x: Math.max(0, newX), y: Math.max(0, newY) }
        : entity
    ));
  }, [dragState]);

  const handleMouseUp = useCallback(() => {
    setDragState(null);
  }, []);

  useEffect(() => {
    if (dragState) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState, handleMouseMove, handleMouseUp]);

  const validateERD = () => {
    let score = 0;
    const maxScore = 10;

    // Check minimum entities
    if (entities.length >= 3) score += 2;
    else if (entities.length >= 2) score += 1;

    // Check entities have attributes
    const entitiesWithAttrs = entities.filter(e => e.attributes.length >= 2);
    if (entitiesWithAttrs.length >= 3) score += 2;
    else if (entitiesWithAttrs.length >= 1) score += 1;

    // Check primary keys
    const entitiesWithPK = entities.filter(e => e.attributes.some(a => a.isPrimaryKey));
    if (entitiesWithPK.length >= 3) score += 2;
    else if (entitiesWithPK.length >= 1) score += 1;

    // Check relationships
    if (relationships.length >= 3) score += 2;
    else if (relationships.length >= 1) score += 1;

    // Check variety in cardinality
    const cardTypes = new Set(relationships.map(r => r.cardinality));
    if (cardTypes.size >= 2) score += 2;
    else if (cardTypes.size >= 1) score += 1;

    setErdScore(score);
    setShowERDValidation(true);
  };

  const resetERD = () => {
    setEntities([]);
    setRelationships([]);
    setShowERDValidation(false);
    setErdScore(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Instructions */}
      <div className="glass-panel" style={{ padding: '20px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#10b981' }}>
          Entity-Relationship Diagram Builder
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
          Build an ER Diagram for a <strong>Student Enrollment System</strong>. Create entities for
          <strong> Student</strong>, <strong>Course</strong>, <strong>Instructor</strong>, and optionally <strong>Department</strong>.
          Add attributes, mark primary keys (🔑), and define relationships with proper cardinality.
          Drag entities to arrange them on the canvas.
        </p>
      </div>

      {/* Entity Creation */}
      <div className="glass-panel" style={{ padding: '16px' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Add Entity
        </h4>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            value={newEntityName}
            onChange={(e) => setNewEntityName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addEntity()}
            placeholder="Entity name (e.g., Student)"
            style={{
              flex: 1, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)', padding: '10px 14px',
              color: 'var(--text-primary)', fontSize: '0.95rem', outline: 'none',
              fontFamily: 'var(--font-body)',
            }}
          />
          <button onClick={addEntity} className="btn btn-primary btn-sm">
            <Plus size={16} /> Add Entity
          </button>
        </div>
      </div>

      {/* Relationship Creation */}
      {entities.length >= 2 && (
        <div className="glass-panel" style={{ padding: '16px' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Add Relationship
          </h4>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <select
              value={selectedFromEntity}
              onChange={(e) => setSelectedFromEntity(e.target.value)}
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)', padding: '8px 12px',
                color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
              }}
            >
              <option value="">From Entity...</option>
              {entities.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>

            <select
              value={selectedCardinality}
              onChange={(e) => setSelectedCardinality(e.target.value as any)}
              style={{
                background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: 'var(--radius-sm)', padding: '8px 12px',
                color: '#818cf8', fontSize: '0.9rem', fontWeight: 700, outline: 'none',
              }}
            >
              <option value="1:1">1 : 1</option>
              <option value="1:M">1 : M</option>
              <option value="M:N">M : N</option>
            </select>

            <select
              value={selectedToEntity}
              onChange={(e) => setSelectedToEntity(e.target.value)}
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)', padding: '8px 12px',
                color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none',
              }}
            >
              <option value="">To Entity...</option>
              {entities.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
            </select>

            <input
              type="text"
              value={relationshipLabel}
              onChange={(e) => setRelationshipLabel(e.target.value)}
              placeholder="Label (e.g., enrolls_in)"
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)', padding: '8px 12px',
                color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', flex: 1, minWidth: '150px',
              }}
            />

            <button onClick={addRelationship} className="btn btn-sm" style={{
              background: 'rgba(16, 185, 129, 0.15)', color: '#10b981',
              border: '1px solid rgba(16, 185, 129, 0.4)',
            }}>
              <Link size={16} /> Connect
            </button>
          </div>

          {/* Relationships List */}
          {relationships.length > 0 && (
            <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {relationships.map(rel => {
                const fromName = entities.find(e => e.id === rel.fromEntityId)?.name || '?';
                const toName = entities.find(e => e.id === rel.toEntityId)?.name || '?';
                return (
                  <div key={rel.id} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '8px 12px', borderRadius: 'var(--radius-sm)',
                    background: 'rgba(99, 102, 241, 0.06)', border: '1px solid rgba(99, 102, 241, 0.15)',
                  }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      <strong>{fromName}</strong>
                      <span style={{ color: '#818cf8', margin: '0 8px', fontWeight: 700 }}>— {rel.cardinality} —</span>
                      <strong>{toName}</strong>
                      {rel.label && <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>({rel.label})</span>}
                    </span>
                    <button onClick={() => removeRelationship(rel.id)} className="btn btn-ghost btn-sm" style={{ color: 'var(--color-danger)', padding: '4px' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ERD Canvas */}
      <div className="glass-panel" style={{ padding: '20px', position: 'relative' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          ER Diagram Canvas {entities.length > 0 && <span style={{ color: 'var(--text-muted)', fontWeight: 400, textTransform: 'none' }}>(drag entities to rearrange)</span>}
        </h4>

        <div
          ref={canvasRef}
          className="erd-canvas"
          style={{
            position: 'relative',
            minHeight: entities.length > 0 ? '500px' : '200px',
            background: 'rgba(0,0,0,0.15)',
            borderRadius: 'var(--radius-md)',
            border: '2px dashed var(--border-color)',
            overflow: 'hidden',
            transition: 'min-height 0.3s ease',
          }}
        >
          {entities.length === 0 && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Add entities above to start building your ER Diagram
            </div>
          )}

          {/* SVG Connectors */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            {relationships.map(rel => {
              const fromEntity = entities.find(e => e.id === rel.fromEntityId);
              const toEntity = entities.find(e => e.id === rel.toEntityId);
              if (!fromEntity || !toEntity) return null;

              const fromX = fromEntity.x + 110;
              const fromY = fromEntity.y + 30 + fromEntity.attributes.length * 12;
              const toX = toEntity.x + 110;
              const toY = toEntity.y + 30 + toEntity.attributes.length * 12;

              const midX = (fromX + toX) / 2;
              const midY = (fromY + toY) / 2;

              return (
                <g key={rel.id}>
                  <line
                    x1={fromX} y1={fromY} x2={toX} y2={toY}
                    stroke="#818cf8" strokeWidth="2" strokeDasharray={rel.cardinality === 'M:N' ? '8,4' : 'none'}
                    opacity={0.8}
                  />
                  {/* Cardinality label */}
                  <rect x={midX - 24} y={midY - 12} width="48" height="24" rx="6" fill="var(--bg-primary)" stroke="#818cf8" strokeWidth="1.5" />
                  <text x={midX} y={midY + 5} textAnchor="middle" fill="#818cf8" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)">
                    {rel.cardinality}
                  </text>

                  {/* Relationship diamond */}
                  {rel.label && rel.label !== rel.cardinality && (
                    <>
                      <rect x={midX - 40} y={midY + 14} width="80" height="18" rx="4" fill="rgba(139, 92, 246, 0.15)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
                      <text x={midX} y={midY + 26} textAnchor="middle" fill="#a78bfa" fontSize="10" fontWeight="600">
                        {rel.label}
                      </text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Entity Boxes */}
          {entities.map(entity => (
            <EntityBox
              key={entity.id}
              entity={entity}
              onMouseDown={(e) => handleMouseDown(entity.id, e)}
              onAddAttribute={addAttribute}
              onRemoveAttribute={removeAttribute}
              onTogglePK={togglePrimaryKey}
              onRemoveEntity={removeEntity}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <button onClick={resetERD} className="btn btn-secondary">
          <RotateCcw size={16} /> Reset Diagram
        </button>
        <button
          onClick={validateERD}
          className="btn"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#fff', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
          }}
        >
          <Send size={16} /> Submit ER Diagram
        </button>
      </div>

      {/* Validation Results */}
      {showERDValidation && erdScore !== null && (
        <div className="glass-panel animate-fade-in" style={{
          padding: '24px', textAlign: 'center',
          border: erdScore >= 7 ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(245, 158, 11, 0.4)',
        }}>
          <Award size={40} color={erdScore >= 7 ? '#10b981' : '#f59e0b'} style={{ margin: '0 auto 12px' }} />
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 8px' }}>
            ER Diagram Score: <span style={{ color: erdScore >= 7 ? '#10b981' : '#f59e0b' }}>{erdScore}/10</span>
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '400px', margin: '16px auto 0', textAlign: 'left' }}>
            <ScoreItem label="Entities created (≥3)" met={entities.length >= 3} />
            <ScoreItem label="Attributes defined (≥2 per entity)" met={entities.filter(e => e.attributes.length >= 2).length >= 3} />
            <ScoreItem label="Primary keys marked" met={entities.filter(e => e.attributes.some(a => a.isPrimaryKey)).length >= 3} />
            <ScoreItem label="Relationships defined (≥3)" met={relationships.length >= 3} />
            <ScoreItem label="Cardinality variety (≥2 types)" met={new Set(relationships.map(r => r.cardinality)).size >= 2} />
          </div>
        </div>
      )}
    </div>
  );
};

/* Entity Box Sub-component */

const EntityBox: React.FC<{
  entity: ERDEntity;
  onMouseDown: (e: React.MouseEvent) => void;
  onAddAttribute: (entityId: string, name: string, type: string) => void;
  onRemoveAttribute: (entityId: string, attrId: string) => void;
  onTogglePK: (entityId: string, attrId: string) => void;
  onRemoveEntity: (entityId: string) => void;
}> = ({ entity, onMouseDown, onAddAttribute, onRemoveAttribute, onTogglePK, onRemoveEntity }) => {
  const [newAttrName, setNewAttrName] = useState('');
  const [newAttrType, setNewAttrType] = useState('VARCHAR');

  const handleAddAttr = () => {
    if (!newAttrName.trim()) return;
    onAddAttribute(entity.id, newAttrName.trim(), newAttrType);
    setNewAttrName('');
  };

  return (
    <div
      style={{
        position: 'absolute',
        left: entity.x,
        top: entity.y,
        width: '220px',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(12px)',
        border: '2px solid rgba(99, 102, 241, 0.4)',
        borderRadius: 'var(--radius-sm)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        zIndex: 2,
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      {/* Entity Header */}
      <div
        onMouseDown={onMouseDown}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 14px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
          borderBottom: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
          cursor: 'grab',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <GripVertical size={14} color="#818cf8" />
          <strong style={{ fontSize: '0.9rem', color: '#818cf8' }}>{entity.name}</strong>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onRemoveEntity(entity.id); }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'var(--text-muted)', display: 'flex' }}
        >
          <Trash2 size={13} />
        </button>
      </div>

      {/* Attributes */}
      <div style={{ padding: '8px 14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {entity.attributes.map(attr => (
          <div key={attr.id} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '4px 6px', borderRadius: '4px',
            background: attr.isPrimaryKey ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, minWidth: 0 }}>
              <button
                onClick={(e) => { e.stopPropagation(); onTogglePK(entity.id, attr.id); }}
                title="Toggle Primary Key"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: '1px',
                  color: attr.isPrimaryKey ? '#f59e0b' : 'var(--text-muted)',
                  display: 'flex', flexShrink: 0,
                }}
              >
                <Key size={12} />
              </button>
              <span style={{
                fontSize: '0.8rem', fontFamily: 'var(--font-mono)',
                color: 'var(--text-primary)',
                textDecoration: attr.isPrimaryKey ? 'underline' : 'none',
                fontWeight: attr.isPrimaryKey ? 700 : 400,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {attr.name}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', flexShrink: 0 }}>{attr.type}</span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onRemoveAttribute(entity.id, attr.id); }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1px', color: 'var(--text-muted)', display: 'flex', flexShrink: 0 }}
            >
              <XCircle size={12} />
            </button>
          </div>
        ))}

        {/* Add Attribute Inline */}
        <div
          style={{ display: 'flex', gap: '4px', marginTop: '4px' }}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            value={newAttrName}
            onChange={(e) => setNewAttrName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddAttr()}
            placeholder="attr"
            style={{
              flex: 1, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
              borderRadius: '4px', padding: '4px 8px', color: 'var(--text-primary)',
              fontSize: '0.78rem', outline: 'none', fontFamily: 'var(--font-mono)', minWidth: 0,
            }}
          />
          <select
            value={newAttrType}
            onChange={(e) => setNewAttrType(e.target.value)}
            style={{
              background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
              borderRadius: '4px', padding: '4px 4px', color: 'var(--text-primary)',
              fontSize: '0.72rem', outline: 'none', width: '60px',
            }}
          >
            <option>VARCHAR</option>
            <option>INT</option>
            <option>DATE</option>
            <option>FLOAT</option>
            <option>BOOLEAN</option>
            <option>TEXT</option>
          </select>
          <button
            onClick={handleAddAttr}
            style={{
              background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '4px', padding: '4px 6px', cursor: 'pointer', color: '#818cf8',
              display: 'flex', alignItems: 'center',
            }}
          >
            <Plus size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* Score Item Helper */
const ScoreItem: React.FC<{ label: string; met: boolean }> = ({ label, met }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
    {met ? <CheckCircle2 size={16} color="#10b981" /> : <XCircle size={16} color="#ef4444" />}
    <span style={{ color: met ? '#10b981' : 'var(--text-secondary)' }}>{label}</span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   SECTION 2: OOP — JAVA CODING ACTIVITY
   ═══════════════════════════════════════════════════════════════ */

const OOPSection: React.FC = () => {
  const [code, setCode] = useState(JAVA_PROBLEM.starterCode);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const lineNumberRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const lines = code.split('\n');
  const lineCount = lines.length;

  const handleScroll = () => {
    if (editorRef.current && lineNumberRef.current && highlightRef.current) {
      lineNumberRef.current.scrollTop = editorRef.current.scrollTop;
      highlightRef.current.scrollTop = editorRef.current.scrollTop;
      highlightRef.current.scrollLeft = editorRef.current.scrollLeft;
    }
  };

  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      // Restore cursor
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const checklistResults = OOP_CHECKLIST.map(item => ({
    ...item,
    passed: item.pattern.test(code),
  }));

  const handleSubmit = () => {
    const passed = checklistResults.filter(r => r.passed).length;
    setScore(passed);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setCode(JAVA_PROBLEM.starterCode);
    setIsSubmitted(false);
    setShowModelAnswer(false);
    setScore(0);
  };

  // Syntax highlighting for the code display
  const highlightCode = (text: string): string => {
    // Escape HTML
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Java keywords
    escaped = escaped.replace(
      /\b(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while|String|System)\b/g,
      '<span style="color: #c084fc; font-weight: 600;">$1</span>'
    );

    // Annotations
    escaped = escaped.replace(
      /(@\w+)/g,
      '<span style="color: #f59e0b; font-weight: 600;">$1</span>'
    );

    // Strings
    escaped = escaped.replace(
      /("(?:[^"\\]|\\.)*")/g,
      '<span style="color: #34d399;">$1</span>'
    );

    // Comments (single-line)
    escaped = escaped.replace(
      /(\/\/.*$)/gm,
      '<span style="color: #6b7280; font-style: italic;">$1</span>'
    );

    // Numbers
    escaped = escaped.replace(
      /\b(\d+\.?\d*)\b/g,
      '<span style="color: #fb923c;">$1</span>'
    );

    // Boolean
    escaped = escaped.replace(
      /\b(true|false|null)\b/g,
      '<span style="color: #f472b6;">$1</span>'
    );

    return escaped;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Problem Statement */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #ef4444 0%, #8b5cf6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Code2 size={22} color="#fff" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
              {JAVA_PROBLEM.title}
            </h3>
            <span className="badge badge-danger" style={{ marginTop: '4px' }}>Java • OOP</span>
          </div>
        </div>
        <div style={{
          color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7,
          whiteSpace: 'pre-wrap',
        }}>
          {JAVA_PROBLEM.description}
        </div>
      </div>

      {/* Code Editor */}
      <div className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
        {/* Editor Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 20px',
          borderBottom: '1px solid var(--border-color)',
          background: 'rgba(0,0,0,0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              JeepneyFareSystem.java — {lineCount} lines
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handleReset} className="btn btn-ghost btn-sm" style={{ fontSize: '0.82rem' }}>
              <RotateCcw size={14} /> Reset
            </button>
          </div>
        </div>

        {/* Editor Body */}
        <div style={{ position: 'relative', display: 'flex', height: '500px' }}>
          {/* Line Numbers */}
          <div
            ref={lineNumberRef}
            style={{
              width: '50px', flexShrink: 0,
              background: 'rgba(0,0,0,0.3)',
              borderRight: '1px solid var(--border-color)',
              overflow: 'hidden',
              padding: '16px 0',
            }}
          >
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i} style={{
                height: '22px', lineHeight: '22px',
                textAlign: 'right', paddingRight: '12px',
                fontSize: '0.78rem', fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)', userSelect: 'none',
              }}>
                {i + 1}
              </div>
            ))}
          </div>

          {/* Syntax Highlighted Overlay */}
          <div
            ref={highlightRef}
            style={{
              position: 'absolute',
              top: 0, left: '50px', right: 0, bottom: 0,
              padding: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              lineHeight: '22px',
              whiteSpace: 'pre',
              overflow: 'auto',
              pointerEvents: 'none',
              color: 'transparent',
              zIndex: 1,
            }}
            dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
          />

          {/* Actual Textarea */}
          <textarea
            ref={editorRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onScroll={handleScroll}
            onKeyDown={handleTab}
            spellCheck={false}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              resize: 'none',
              padding: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              lineHeight: '22px',
              color: 'var(--text-primary)',
              caretColor: '#818cf8',
              whiteSpace: 'pre',
              overflowWrap: 'normal',
              overflow: 'auto',
              position: 'relative',
              zIndex: 2,
              WebkitTextFillColor: 'transparent',
            }}
          />
        </div>
      </div>

      {/* OOP Checklist & Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Checklist */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={18} color="#f59e0b" />
            OOP Concept Checklist
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {checklistResults.map(item => (
              <div key={item.id} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '8px 12px', borderRadius: 'var(--radius-sm)',
                background: item.passed ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                border: item.passed ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid var(--border-color)',
                transition: 'all 0.2s ease',
              }}>
                {item.passed ? (
                  <CheckCircle2 size={16} color="#10b981" />
                ) : (
                  <div style={{
                    width: '16px', height: '16px', borderRadius: '50%',
                    border: '2px solid var(--text-muted)',
                  }} />
                )}
                <span style={{
                  fontSize: '0.85rem',
                  color: item.passed ? '#10b981' : 'var(--text-secondary)',
                  fontWeight: item.passed ? 600 : 400,
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '14px', padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <span style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 700 }}>
              {checklistResults.filter(r => r.passed).length}/{checklistResults.length} concepts detected
            </span>
          </div>
        </div>

        {/* Submit Panel */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Send size={18} color="#10b981" />
              Submission
            </h4>
            {!isSubmitted ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                When you're ready, submit your code for structural analysis. The system will check for OOP concepts
                present in your implementation.
              </p>
            ) : (
              <div className="animate-fade-in">
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <div style={{
                    fontSize: '3rem', fontWeight: 800,
                    background: score >= 7 ? 'linear-gradient(135deg, #10b981, #34d399)' :
                      score >= 4 ? 'linear-gradient(135deg, #f59e0b, #fbbf24)' :
                      'linear-gradient(135deg, #ef4444, #f87171)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>
                    {score}/{OOP_CHECKLIST.length}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '4px 0 0' }}>
                    {score >= 8 ? '🎉 Excellent! Outstanding OOP implementation!' :
                     score >= 6 ? '👍 Good work! A few concepts could be strengthened.' :
                     score >= 4 ? '📝 Decent start. Review missing concepts.' :
                     '💪 Keep practicing! Review OOP fundamentals.'}
                  </p>
                </div>

                {/* Rubric */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {checklistResults.map(item => (
                    <div key={item.id} style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      fontSize: '0.82rem',
                      color: item.passed ? '#10b981' : '#ef4444',
                    }}>
                      {item.passed ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
                      <span>{item.label}</span>
                      <span style={{ marginLeft: 'auto', fontWeight: 700 }}>{item.passed ? '+1' : '0'}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="btn btn-lg"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#fff', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.3)',
                  width: '100%',
                }}
              >
                <Send size={20} /> Submit Code
              </button>
            ) : (
              <>
                <button onClick={handleReset} className="btn btn-secondary" style={{ width: '100%' }}>
                  <RotateCcw size={16} /> Try Again
                </button>
                <button
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                  className="btn btn-sm"
                  style={{
                    width: '100%',
                    background: showModelAnswer ? 'rgba(139, 92, 246, 0.15)' : 'rgba(99, 102, 241, 0.1)',
                    color: '#818cf8', border: '1px solid rgba(99, 102, 241, 0.3)',
                  }}
                >
                  {showModelAnswer ? <EyeOff size={14} /> : <Eye size={14} />}
                  <span>{showModelAnswer ? 'Hide Model Answer' : 'View Model Answer'}</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Model Answer */}
      {showModelAnswer && (
        <div className="glass-panel animate-fade-in" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{
            padding: '14px 20px', borderBottom: '1px solid var(--border-color)',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <Award size={18} color="#a78bfa" />
            <strong style={{ fontSize: '0.95rem', color: '#a78bfa' }}>Model Answer</strong>
          </div>
          <pre style={{
            padding: '20px', margin: 0, overflowX: 'auto',
            fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.6,
            color: 'var(--text-primary)', background: 'rgba(0,0,0,0.2)',
          }}
            dangerouslySetInnerHTML={{ __html: highlightCode(JAVA_PROBLEM.modelAnswer) }}
          />
        </div>
      )}
    </div>
  );
};

// Need to export highlightCode for model answer usage outside of component scope
// Since it's used in OOPSection's render, we define it inline there.
// However, the pre tag in model answer needs it — we solve this by using a self-contained approach.
