import bcrypt from 'bcrypt';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';

import AuthService from '../../services/auth/auth.service.js';

import { BaseError } from '../../config/error/error.js';

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async register(req, res) {
    try {
      const {
        email,
        password,
        bio,
        gender
      } = req.body;

      this.authService._va
      const newUser = await authService.registerService(req.body);
      
      const jwtToken = this.authService._generateJWTToken(newUser._id);

      return res.status(201).json({
        success: true,
        user:{
          email,
          bio,
          gender
        },
        jwtToken
      });

    }catch(error) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).json({
          success: false,
          errorCode: error.errorCode,
          message: error.message
        });
      }

      return res.status(500).json({
        success: false,
        errorCode: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected Error'
      });
    }
  }
}


export default AuthController;