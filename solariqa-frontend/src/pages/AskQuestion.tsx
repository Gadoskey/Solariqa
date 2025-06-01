
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Tag, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AskQuestion = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const popularTags = ['solana', 'anchor', 'rust', 'smart-contracts', 'defi', 'nft', 'web3', 'javascript', 'typescript', 'react'];

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag.toLowerCase()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(tagInput.trim());
    }
  };

  const validateForm = () => {
    const newErrors: { title?: string; description?: string } = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Submitting question:', { title, description, tags });
      // Handle form submission here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Questions
          </Button>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Ask a Question</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <Label htmlFor="title" className="text-base font-medium">
                Question Title *
              </Label>
              <p className="text-sm text-gray-600 mb-2">
                Be specific and imagine you're asking a question to another person.
              </p>
              <Input
                id="title"
                placeholder="e.g. How do I implement cross-program invocation in Solana?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={errors.title ? 'border-red-500' : ''}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description" className="text-base font-medium">
                Describe your problem *
              </Label>
              <p className="text-sm text-gray-600 mb-2">
                Include all the information someone would need to answer your question. What have you tried? What exactly isn't working?
              </p>
              <Textarea
                id="description"
                placeholder="Provide details about your question. Include code examples, error messages, or what you've already tried..."
                className={`min-h-[200px] ${errors.description ? 'border-red-500' : ''}`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            {/* Tags */}
            <div>
              <Label htmlFor="tags" className="text-base font-medium">
                Tags (up to 5)
              </Label>
              <p className="text-sm text-gray-600 mb-2">
                Add tags to help others find and answer your question.
              </p>
              
              {/* Selected Tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:text-purple-900"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              
              {/* Tag Input */}
              <Input
                id="tags"
                placeholder="Type a tag and press Enter"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagInputKeyPress}
                disabled={tags.length >= 5}
              />
              
              {/* Popular Tags */}
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Popular tags:</p>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => addTag(tag)}
                      disabled={tags.includes(tag) || tags.length >= 5}
                      className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">Writing a good question</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Make your title specific and descriptive</li>
                <li>• Explain what you've already tried</li>
                <li>• Include relevant code snippets or error messages</li>
                <li>• Use proper tags to help others find your question</li>
                <li>• Be respectful and constructive</li>
              </ul>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                Post Question
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AskQuestion;
