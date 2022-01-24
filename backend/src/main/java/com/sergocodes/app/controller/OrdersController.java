package com.sergocodes.app.controller;

import com.sergocodes.app.model.Orders;
import com.sergocodes.app.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrdersController {
    @Autowired
    private OrdersService ordersService;

    @PostMapping("/add")
    public String add(@RequestBody Orders orders){
        System.out.println(orders.toString());
        ordersService.saveOrders(orders);
        return "New order is added";
    }

    @GetMapping("/getAll")
    public List<Orders> getAllOrders(){
        return ordersService.getAllOrders();
    }
}
