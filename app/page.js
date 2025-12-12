export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Profile Manager</h1>
        <p className="text-gray-600 text-center mb-6">React Context API Demo</p>
        <div className="space-y-4">
          <a href="/profile/create" className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Create Profile
          </a>
        </div>
      </div>
    </div>
  )
}