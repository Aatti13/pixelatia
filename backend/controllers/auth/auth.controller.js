import AuthService from '../../services/auth/auth.service.js';

import { BaseError } from '../../config/error/error.js';

class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.register = this.register.bind(this);
  }

  register = async(req, res)=>{
    try {
      const {
        email,
        password,
        bio,
        gender
      } = req.body;

      this.authService._va
      const newUser = await this.authService.registerService(req.body);
      
      const jwtToken = this.authService._generateJWTToken(newUser._id);

      return res.status(201).json({
        success: true,
        user:{
          email: email,
          username: newUser.username,
          bio: newUser.bio,
          gender: gender
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

      console.error(error);
      return res.status(500).json({
        success: false,
        errorCode: 'INTERNAL_SERVER_ERROR',
        message: 'Unexpected Error'
      });
    }
  }
}


export default AuthController;