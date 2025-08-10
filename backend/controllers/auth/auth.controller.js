import AuthService from '../../services/auth/auth.service.js';

import { BaseError } from '../../config/error/error.js';

class AuthController {
  constructor() {
    this.authService = new AuthService();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  register = async(req, res)=>{
    try {
      const {
        email,
        password,
        bio,
        gender
      } = req.body;
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

  login = async (req, res)=>{
    try {
      const { email, password } = req.body;

      const user = await this.authService.loginService({ email, password });
      const jwtToken = this.authService._generateJWTToken(user._id);

      return res.status(201).json({
        success: true,
        message: "Logged In Successfully",
        user: {
          email: user.email,
          username: user.username
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

  logout = async (req, res)=>{
    try {
      return res.status(201).json({
        success: true,
        message: 'Logged out successfully'
      });
    }catch(error) {
      console.error('Error during logout:', error);
      return res.status(500).json({
        success: false,
        errorCode: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred during logout.'
      });
    }
  }
}


export default AuthController;