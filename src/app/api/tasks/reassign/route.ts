import { prisma } from "@/lib/prisma";
import { Task } from "@/utils/types";
import { verifyToken } from "@/utils/verifyToken";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "../../../../../generated/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const user = verifyToken(request);
    if (!user) return NextResponse.json({ message: "لا يُسمح إلا لمدير الموقع بإضافة مهام جديدة " }, { status: 403 });
    if (user.role === "EMPLOYEE") return NextResponse.json({ message: "لا يُسمح إلا لمدير الموقع بإضافة مهام جديدة " }, { status: 403 });
    const body = (await request.json()) as Task;
    const newTask = await prisma.task.create({
      data: {
        title: body.title.trim(),
        assignedBy: user.name,
        currency: body.currency,
        description: body.description.trim(),
        startDate: body.startDate.trim(),
        endDate: body.endDate.trim(),
        price: body.price,
        priority: body.priority,
        status: "PENDING",
        archived: false,
        userId: body.userId,
        reassignReason: body.reassignReason,
        attachments: body.attachments as Prisma.InputJsonValue[],
      },
        include: {assignedTo: true},
    });
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
