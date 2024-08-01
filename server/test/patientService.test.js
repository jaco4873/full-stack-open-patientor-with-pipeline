// test/patientService.test.js
import { describe, it, expect } from 'vitest';
import request from 'supertest'; 
import app from '../src/index'

// Mock data
const expectedPatientNames = [
  "John McClane",
  "Martin Riggs",
  "Hans Gruber",
  "Dana Scully",
  "Matti Luukkainen"
];

describe('GET /api/patients', () => {
  it('should return the correct patient names', async () => {
    const response = await request(app).get('/api/patients');
    expect(response.status).toBe(200);

    // Extract patient names from the response body
    const patientNames = response.body.map(patient => patient.name);

    // Check if the patient names match the expected names
    expect(patientNames).toEqual(expectedPatientNames);
  });
});