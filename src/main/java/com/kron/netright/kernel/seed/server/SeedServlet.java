package com.kron.netright.kernel.seed.server;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

public class SeedServlet extends HttpServlet{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Gson gson = new Gson();
		resp.setContentType("application/json");
		
		SeedBean responseBean = new SeedBean();
		
		responseBean.setMessage("this is response from servlet!");
		resp.getWriter().print(gson.toJson(responseBean));
	}
	
	
	private class SeedBean {
		private String message;
		
		public void setMessage(String message) {
			this.message = message;
		}
	}

}
