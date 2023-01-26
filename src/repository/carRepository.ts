import { Cars } from "../protocols/cars.js";
import db from "../config/database.js";
import prisma from "../config/database.js";

async function getCars(): Promise<Cars[]> {
  return prisma.cars.findMany();
}

async function getCar(id: number): Promise<Cars> {
  return prisma.cars.findUnique({
    where: { id },
  });
}

async function getCarWithLicensePlate(licensePlate: string): Promise<Cars> {
  return prisma.cars.findUnique({
    where: { licensePlate },
  });
}

async function createCar(model: string, licensePlate: string, year: number, color: string): Promise<Cars> {
  return prisma.cars.create({
    data: { model, licensePlate, year: String(year), color },
  });
}

async function deleteCar(id: number): Promise<Cars> {
  return prisma.cars.delete({
    where: { id },
  });
}

async function updateCar(id: number, newData: Partial<Cars>) {
  return prisma.cars.update({
    where: { id },
    data: {
      model: newData.model,
      licensePlate: newData.licensePlate,
      year: newData.year,
      color: newData.color,
    },
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar,
};

export default carRepository;
