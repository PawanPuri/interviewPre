import mongoose from 'mongoose';

function connectDB() {
    mongoose.connect('mongodb+srv://pawanpuri969163:Vj2PJ4UNmc90HkGn@cluster0.6ip1wew.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const connection = mongoose.connection;

    connection.on('connected', () => {
        console.log('MongoDB connected...');
    });

    connection.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });
}

// Call the connectDB function to establish the connection
connectDB();

export default mongoose;
