import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function POST(request: Request) {
    try {
      const data = await request.json();
      const { title, subTitle, content, published, authorEmail, category } = data;
  
      const post = await prisma.post.create({
        data: {
          title,
          subTitle,
          content,
          published,
          category,
          author: { connect: { email: authorEmail } },
        },
      });
  
      return NextResponse.json(post);
    } catch (error:any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  


  export async function GET(request: Request) {
    try {
      const { searchParams } = new URL(request.url);
      const id = searchParams.get("id");
      const page = parseInt(searchParams.get("page") || "1");
      const pageSize = parseInt(searchParams.get("pageSize") || "9");
  
      if (id) {
        // Fetch single post
        const post = await prisma.post.findUnique({
          where: { id },
        });
        if (!post) {
          return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
        return NextResponse.json(post);
      }
  
      // Fetch paginated published posts
      const skip = (page - 1) * pageSize;
  
      const posts = await prisma.post.findMany({
        where: { published: true },
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" },
      });
  
      const totalPosts = await prisma.post.count({
        where: { published: true },
      });
  
      return NextResponse.json({
        posts,
        pagination: {
          page,
          pageSize,
          totalPosts,
          totalPages: Math.ceil(totalPosts / pageSize),
        },
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }

  export async function PUT(request: Request) {
    try {
      const data = await request.json();
      const { id, title, subTitle, content, published } = data;
  
      const post = await prisma.post.update({
        where: { id },
        data: {
          title,
          subTitle,
          content,
          published,
        },
      });
  
      return NextResponse.json(post);
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }


export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
    }

    await prisma.post.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Post deleted successfully" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}