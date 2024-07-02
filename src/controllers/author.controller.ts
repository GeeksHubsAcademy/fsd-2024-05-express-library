import { Request, Response } from "express";
import { Author } from "../database/models/Author";

export const createAuthor = async (req: Request, res: Response) => {
  try {
    // 1. recuperar la informacion de la req
    const name = req.body.name;
    const nationality = req.body.nationality;

    // 2. Validar informacion
    if (!name) {
      return res.status(400).json(
        {
          success: false,
          message: "name is required"
        }
      )
    }

    if (!nationality) {
      return res.status(400).json(
        {
          success: false,
          message: "nationality is required"
        }
      )
    }

    // 3. Tratar informacion

    // 4. Atacar a la bd
    const newAuthor = await Author.create(
      {
        name: name,
        nationality: nationality
      }
    ).save();

    // 5. Responder
    res.json(
      {
        success: true,
        message: 'Author created successfully',
        data: newAuthor
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "Error creating author"
      }
    )
  }
}

export const updateAuthorById = (req: Request, res: Response) => {
  console.log(req.params.id);

  res.send(`AUTHOR UPDATED with id: ${req.params.id}`)
}

export const deleteUserById = (req: Request, res: Response) => {
  res.send(`AUTHOR DELETED BY ID ${req.params.id}`)
}