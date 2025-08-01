import FoodItem from '../models/foodItem.model.js';
import Restaurant from '../models/restaurant.model.js';

const addFoodItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, isVeg, category, description, isAvailable, image } = req.body;
    
    const requiredFields = ['name', 'price', 'isVeg', 'category'];
    const missingFields = requiredFields.filter(field => req.body[field] === undefined);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        requiredFields: missingFields
      });
    }

    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: 'Restaurant not found'
      });
    }

    const newFoodItem = new FoodItem({
      name,
      price,
      isVeg,
      category,
      description: description || '',
      restaurant: id,
      isAvailable,
      image: image || ''

    });

    await newFoodItem.save();

    res.status(201).json({
      success: true,
      message: 'Food item added successfully',
      foodItem: newFoodItem
    });
  } catch (error) {
    console.error('Error adding food item:', error);
    
    if (error.name === 'ValidationError') {
      const errorMessages = [];
      for (let key in error.errors) {
        errorMessages.push(`${error.errors[key].message}`);
      }
      return res.status(400).json({
        success: false,
        message: `Validation failed. ${errorMessages.join('. ')}`,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find().populate('restaurant', 'name');
    
    res.status(200).json({
      success: true,
      count: foodItems.length,
      foodItems
    });
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

const getFoodItemById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const foodItem = await FoodItem.findById(id).populate('restaurant', 'name address');
    if (!foodItem) {
      return res.status(404).json({
        success: false,
        message: 'Food item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      foodItem
    });
  } catch (error) {
    console.error('Error fetching food item:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

const updateFoodItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, price, isVeg, category, description, isAvailable, image } = req.body;
  
      const foodItem = await FoodItem.findById(id);
      if (!foodItem) {
        return res.status(404).json({
          success: false,
          message: 'Food item not found'
        });
      }
  
      foodItem.name = name || foodItem.name;
      foodItem.price = price || foodItem.price;
      foodItem.isVeg = isVeg || foodItem.isVeg;
      foodItem.category = category || foodItem.category;
      foodItem.description = description || foodItem.description;
      foodItem.isAvailable = isAvailable || foodItem.isAvailable;
      foodItem.image = image || foodItem.image;
  
      await foodItem.save();
  
      res.status(200).json({
        success: true,
        message: 'Food item updated successfully',
        foodItem
      });
    } catch (error) {
      console.error('Error updating food item:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  };

  const deleteFoodItem = async (req, res) => {
    try {
      const { id } = req.params;
  
      const foodItem = await FoodItem.findByIdAndDelete(id);
      if (!foodItem) {
        return res.status(404).json({
          success: false,
          message: 'Food item not found'
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Food item deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting food item:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  };

export { addFoodItem, getAllFoodItems, getFoodItemById, updateFoodItem, deleteFoodItem };
